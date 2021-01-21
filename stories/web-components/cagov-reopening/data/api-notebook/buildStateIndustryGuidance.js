const fetch = require("node-fetch");
const fs = require("fs");

// Location of docs templates.
const docsPath =
  "./stories/web-components/cagov-reopening/data/api-notebook/api_templates/";

// Write folder for JSON output
const dataPath =
  "./stories/web-components/cagov-reopening/data/api-notebook/auto-generated-data";

const getDate = () => {
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
      return new Date(now_utc);
}

// How to use: 
// For each activity-business-search-data record
// For each primary_guidance and secondary_guidance
    //  Use key value
    // For each primary guidance & secondary guidance, get state-industry-guidance key (comma separated) & build results.
    // state-industry-guidance
    // For each industry-category  covid19-industry-guidance-categories
    // key: industry_category_key // @TODO could this be industry_category_key? 
        // language
        // label
        // guidance_metadata  covid19-related-guidance-metadata
            // get industry_category_key
            // language
        // guidance_pdf_links covid19-industry-guidance-pdf-links
            // industry_category_key
            // language
        // guidance_additional_resources // covid19-industry-guidance-additional-resources
            // industry_category_key // @TODO could this be industry_category_key? 
            // sort by order, 1 is first, 5 is lower down.
            // language
const buildStateGuidanceJSON = () => {
  try {
  let apiDoc = JSON.parse(fs.readFileSync(`${docsPath}/covid19-state-industry-guidance.api.json`));
  let categories = JSON.parse(fs.readFileSync(`${dataPath}/data-covid19-industry-guidance-categories.json`, "utf8"));
  let metadata = JSON.parse(fs.readFileSync(`${dataPath}/data-covid19-related-guidance-metadata.json`, "utf8"));
  let pdfLinks = JSON.parse(fs.readFileSync(`${dataPath}/data-covid19-industry-guidance-pdf-links.json`, "utf8"));
  let additionalResources = JSON.parse(fs.readFileSync(`${dataPath}/data-covid19-industry-guidance-additional-resources.json`, "utf8"));
  let data = {};
  categories.data.map((item) => {
    let category = item["industry_category_key"];
    // console.log("category", category);
    let categoryMetadata = metadata.data.filter((dataItem) => dataItem["industry_category_key"] === category);
    let categoryPdfLinks = pdfLinks.data.filter((dataItem) => dataItem["industry_category_key"] === category);
    let categoryAdditionalResources = additionalResources.data.filter((dataItem) => dataItem["industry_category_key"] === category); // @TODO sort this one


    data[category] = {
        metadata: categoryMetadata !== null && categoryMetadata[0] !== undefined ? categoryMetadata : null,
        pdf: categoryPdfLinks,
        additional_resources: categoryAdditionalResources,
      };
  });

  const utcDate = getDate();

  let apiData = {
    docs: apiDoc,
    data: data,
    date_updated: utcDate,
    total: Object.keys(data).length,
  }

  fs.writeFile(
    `${dataPath}/data-covid19-state-industry-guidance.json`,
    JSON.stringify(apiData),
    function (err) {
      if (err) return console.log(err);
      console.log(`Updated: data-covid19-state-industry-guidance.json`);
    }
  );
  } catch(error) {
    console.error("Error building State Industry Guidance data.", error)
  }
};


/**
 * Run the script
 */
buildStateGuidanceJSON();