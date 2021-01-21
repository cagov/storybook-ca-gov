// Local Script for Node.JS
const fetch = require("node-fetch");
const fs = require("fs");
const { Parser } = require("json2csv");
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env["AIRTABLE_API_KEY"],
});

const base = Airtable.base("appwpIGqyvG6bl73j");
const VIEW_NAME = "API"; // Manually set in the base to match this config.
const docsPath =
  "./stories/web-components/cagov-reopening/data/api-notebook/api_templates/";
const dataPath =
  "./stories/web-components/cagov-reopening/data/api-notebook/auto-generated-data";
// Estimated total size: 500KB (JSON from Airtable)

// Note full API in Airtable & our documention.
let endpoints = {
  "covid19-activity-business-search-data": {
    docs: `${docsPath}covid19-activity-business-search-data.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-activity-business-search-data",
    fields: {
      activity_reference_key: null,
      activity_search_autocomplete: null,
      override_industry_guidance_label: null,
      activity_key: null,
      "4 - WIDESPREAD": null,
      "3 - SUBSTANTIAL": null,
      "2 - MODERATE": null,
      "1 - MINIMAL": null,
      RSHO: null,
      last_modified: null,
      primary_guidance: null,
      secondary_guidance: null,
    },
  },
  "covid19-industry-guidance-pdf-links": {
    docs: `${docsPath}covid19-industry-guidance-pdf-links.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-industry-guidance-pdf-links",
    fields: {
      id: null,
      filename: null,
      git_pdf_template_type: null,
      industry_category_key: null,
      pdf_language: null,
      summary_of_changes: null,
      pdf_publication_date: null,
      accessibility_links: null,
      permalink: null,
      git_date_updated: null,
    },
  },
  "covid19-related-guidance-metadata": {
    docs: `${docsPath}covid19-related-guidance-metadata.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-related-guidance-metadata",
    fields: {
      industry_category_key: null,
      date_last_modified: null,
      language: null,
      optional_message: null,
      safer_economy_label: null,
    },
  },
  "covid19-industry-guidance-categories": {
    docs: `${docsPath}covid19-industry-guidance-categories.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-industry-guidance-categories",
    fields: {
      related_guidance_key: null,
      industry_category_label: null,
      date_last_modified: null,
      language: null,
    },
  },
  "covid19-industry-guidance-additional-resources": {
    docs: `${docsPath}covid19-industry-guidance-additional-resources.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-industry-guidance-additional-resources",
    fields: {
      id: null,
      related_guidance_industry_category_key: null,
      url: null,
      message: null,
      type: null,
      file_title: null,
      order: null,
      date_last_modified: null,
      language: null,
    },
  },
  "covid19-county-webpages": {
    docs: `${docsPath}covid19-county-webpages.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-county-webpages",
    fields: {
      key: null,
      label: null,
      url_county_covid19: null,
      county_department: null,
      last_modified_time: null,
    },
  },
  "covid19-language-keys": {
    docs: `${docsPath}covid19-language-keys.api.json`,
    endpoint:
      "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-language-keys",
    fields: {
      id: null,
      language: null,
      code: null,
      key: null,
      alternative_codes: null,
    },
  },
};

// https://flaviocopes.com/airtable/
// https://nocodeapi.com/airtable-api
// @TODO take JSON data for records & store as a CSV file too for backup and storing on Wordpress

const buildData = async () => {
  await Object.keys(endpoints).map((endpoint) => {
    const table = base(endpoint);
    const records = table
      .select({
        view: VIEW_NAME,
      })
      .all();
    records.then((response) => {
      console.log("got response,", endpoint);
      let fieldsData = formatResponse(response, endpoint);
      let formattedApiResponse = formatApi({
        docs: endpoints[endpoint].docs,
        data: fieldsData,
      });

      // Write file
      if (formattedApiResponse !== null) {
        fs.writeFile(
          `${dataPath}/data-${endpoint}.json`,
          formattedApiResponse,
          function (err) {
            if (err) return console.log(err);
            console.log(`saved: ${endpoint}.json`);
          }
        );
      }
    });
  });
};
/** Return only the field data from Airtable */
const formatResponse = (data, endpoint) => {
  if (data !== undefined && data !== null) {
    let formattedData = data.map((item) => {
      let returnedFields = endpoints[endpoint].fields;
      let fields = {};
      Object.keys(returnedFields).map((fieldName) => {
        fields[fieldName] =
          item.fields[fieldName] !== undefined ? item.fields[fieldName] : null;
      });
      return fields;
    });

    // Save this raw data as CSV.
    saveAsCsv(formattedData, endpoint);

    return formattedData;
  }
  return null;
};

/** 
 * Format simple API from each Airtable dataset, only retrieving the fields.
 * If record ids are desired for tracing data back, that the data formatter can be updated.
 * This api has docs from a docs template & updated data sources.
 */
const formatApi = ({ data, docs }) => {
  try {
    // Get date updated.
    var date = new Date();
    var now_utc = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
    const utcDate = new Date(now_utc);

    // Get docs template.
    let docsData = fs.readFileSync(docs, "utf8");
    return JSON.stringify({
      docs: JSON.parse(docsData),
      data: data,
      total: data.length,
      date_updated: utcDate,
    });
  } catch (error) {
    console.error(error);
  }
};

const saveAsCsv = (fieldData, endpoint) => {
  try {
    let opts = Object.keys(endpoints[endpoint].fields);
    const parser = new Parser(opts);
    const csv = parser.parse(fieldData);
    fs.writeFile(
      `${dataPath}/data-${endpoint}.csv`,
      csv,
      function (err) {
        if (err) return console.log(err);
        console.log(`saved: ${endpoint}.csv`);
      }
    );
  } catch (err) {
    console.error("ERROR", err);
  }
};

const lookupAdditionalResource = (key) => {};

buildData();
