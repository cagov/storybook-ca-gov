// Local Script for Node.JS
const fetch = require("node-fetch");
const fs = require("fs");

const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env["AIRTABLE_API_KEY"],
});

const base = Airtable.base("appwpIGqyvG6bl73j");
const VIEW_NAME = "API"; // Manually set in the base to match this config.

// Estimated total size: 500KB (JSON from Airtable)
let endpoints = {
  "covid19-activity-business-search-data":
    "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-activity-business-search-data",
  //   "covid19-industry-guidance-pdf-links": "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-industry-guidance-pdf-links",
  // "covid19-related-guidance-metadata": "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-related-guidance-metadata",
  // "covid19-industry-guidance-categories": "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-industry-guidance-categories",
  // "covid19-industry-guidance-additional-resources": "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-industry-guidance-additional-resources",
  // "covid19-county-webpages": "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-county-webpages",
  // "covid19-language-keys": "https://api.airtable.com/v0/appwpIGqyvG6bl73j/covid19-language-keys",
};

// https://flaviocopes.com/airtable/
// https://nocodeapi.com/airtable-api
// @TODO take JSON data for records & store as a CSV file too for backup and storing on Wordpress

const buildData = async () => {
  let data = {};
  await Object.keys(endpoints).map((endpoint) => {
    const table = base(endpoint);
    const records = table
      .select({
        view: VIEW_NAME,
      })
      .all();
    records.then(response => {
        data[endpoint] = response;
        console.log("got response,", endpoint);
        fs.writeFile(`./stories/web-components/cagov-reopening/data/api-notebook/auto-generated-data/data-${endpoint}.json`, formatResponse(response), function (err) {
          if (err) return console.log(err);
          console.log(`saved: ${endpoint}.json`);
        });
    });
  });
  return data;
};

const formatResponse = (data) => {
  let formattedData = data;
  formattedData = data.map(item => {
    return item.fields;
  })
  return JSON.stringify(formattedData);
};

buildData();
