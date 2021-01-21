const fetch = require("node-fetch");
const fs = require("fs");
const { Parser } = require("json2csv");
const Airtable = require("airtable");

// Local Script for Node.JS
// To run: `npm run update:data`

/** Set up Airtable 
 * .env/.env.local or .env/.env.production
 * e.g.
AIRTABLE_API_KEY=the_api_key_from_your_airtable_account
AIRTABLE_BASE_ID=the_app_id_for_base
 * 
 * 
**/
Airtable.configure({
  apiKey: process.env["AIRTABLE_API_KEY"],
});
const base = Airtable.base(process.env["AIRTABLE_BASE_ID"]); // Check Airtable API documention when logged into Airtable under "Account" and go to "Airtable API" & look up more information about your base.
const VIEW_NAME = process.env["AIRTABLE_VIEW_NAME"]; // Manually set in the base to match this config. The default is
const docsPath =
  "./stories/web-components/cagov-reopening/data/api-notebook/api_templates/";
const dataPath =
  "./stories/web-components/cagov-reopening/data/api-notebook/auto-generated-data";

// Developer NOTES:
// Estimated total size: 500KB (JSON from Airtable)
// https://flaviocopes.com/airtable/
// https://nocodeapi.com/airtable-api
// @TODO take JSON data for records & store as a CSV file too for backup and storing on Wordpress
// @TODO add prettier formatter to API data
// Endpoints. Keys are the table names.
// NOTE: Airtable configured to have machine readable table names. If names are user-friendly, you will need the string with escaped spaces as the keys.
// We created several Airtable bases & exported read-only API views to a separate "api-only" Airtable account.
// We re-wrote the field names in the API to be machine-friendly.
// Airtable API does not return values if fields are empty (to save space), but we want null values for all fields for consistency. The map & docs will need to be updated if fields or api version are changed.
// Airtable's npm package contains an .all() response which seems to not trigger rate limit issues & returns all data responses.
// Airtable does not provide an API function to get CSV data, so we generate a CSV here to store in our public github. A similar script could be run in a non-public backup environment for other data backups.

// Settings for exported JSON & CSV data.
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
    viewName: "API", // Not currently used in this script, but this script could be altered to use specific viewNames for further selecting or filtering data.
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
    viewName: "API",
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
    viewName: "API",
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
    viewName: "API",
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
    viewName: "API",
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
    viewName: "API",
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
    viewName: "API",
  },
};

/**
 * Read data for each Airtable table endpoint & build JSON & CSV data.
 */
const buildData = async () => {
  await Object.keys(endpoints).map((endpoint) => {
    // Endpoint is table, but not called table here so as to not conflict with Airtable's API interface namespace.
    // Set table
    const table = base(endpoint);

    // Get all records.
    const records = table
      .select({
        view: VIEW_NAME,
      })
      .all();

    // Format the response.
    records.then((response) => {
      let fieldsData = formatResponse({
        data: response,
        endpoint: endpoint,
        saveCSV: true,
      });

      // Aggregate response with docs & data to be a simple static "API" file for utility datasets & aggregates of multiple data sources.
      let formattedApiResponse = formatApi({
        docs: endpoints[endpoint].docs, // We have docs templates that need to be kept up to date. Templates can be edited in github in `docsPath` folder.
        data: fieldsData,
      });

      // Write file as JSON
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

/**
 * Return only the field data from Airtable
 * If record ids are desired for tracing data back, that the data formatter can be updated.
 * This api has docs from a docs template & updated data sources.
 */
const formatResponse = ({ data = null, endpoint = null, saveCSV = true }) => {
  if (data !== undefined && data !== null && endpoint !== null) {
    let formattedData = data.map((item) => {
      // Get the map of fields that we want to return.
      let returnedFields = endpoints[endpoint].fields;

      // Build new fields data object.
      let fields = {};
      Object.keys(returnedFields).map((fieldName) => {
        fields[fieldName] =
          item.fields[fieldName] !== undefined ? item.fields[fieldName] : null;
      });
      return fields;
    });

    // Save this raw data as CSV.
    if (saveCSV === true) {
      saveAsCsv(formattedData, endpoint);
    }
    return formattedData;
  }
  return null;
};

/**
 * Format simple API from each Airtable dataset, only retrieving the fields.
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

    // Load docs template.
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
/**
 * Write parsed CSV data (from fields value returned from Airtable) to CSV file.
 * @param {*} fieldData 
 * @param {*} endpoint 
 */
const saveAsCsv = (fieldData, endpoint) => {
  try {
    let opts = Object.keys(endpoints[endpoint].fields);
    const parser = new Parser(opts);
    const csv = parser.parse(fieldData);
    fs.writeFile(`${dataPath}/data-${endpoint}.csv`, csv, function (err) {
      if (err) return console.log(err);
      console.log(`Saved CSV file: ${endpoint}.csv`);
    });
  } catch (err) {
    console.error("ERROR writing CSV file", err);
  }
};

const connectRelatedData = (key, table) => {
  // For each activitiy-business-search-data record
  // For each primary_guidance and secondary_guidance
  //  Use key value
  //
};

/**
 * Run the script
 */
buildData();
