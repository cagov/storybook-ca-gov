export const buildStateIndustryGuidanceCard = ({
  activityLabel,
  county,
  stateIndustryGuidanceData,
  searchResultData,
  seeStateIndustryGuidanceLabel = "See state industry guidance", // @TODO add as data label
  guidanceTemplate = `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="activityLabel"></span>`,

  industryGuidancePdfLabel = `Industry guidance for <span data-attribute="activityLabel"></span>`,
  checklistPdfLabel = `Checklist for <span data-attribute="activityLabel"></span>`,
  additionalGuidanceLabel = "Depending on your business operations, other guidance may apply",
  resultType = "default",
  language = "en",
}) => {
  // @TODO Add accordion syntax
  // @TODO Add dropdown interactive list box
  // Check external link

  let moreLanguages = `
    <ul class="dropdown-menu-inline">
      <li><a href="http://files">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
    </ul>
    `;

  try {
    if (resultType === "default") {
      let accordionContent = getDefaultAccordionContent({
        stateIndustryGuidanceData,
        activityLabel,
        searchResultData,
        language,
        additionalGuidanceLabel,
      });
      //   <cagov-accordion>
      return `<div class="state-guidance">
                <div class="card">
                  <button class="card-header accordion-alpha" type="button" aria-expanded="false">
                    <div class="accordion-title">
                        ${seeStateIndustryGuidanceLabel}
                    </div><div class="plus-munus"><cagov-plus></cagov-plus><cagov-minus></cagov-minus></div>
                  </button>
                  <div class="card-container" aria-hidden="true">
                    <div class="card-body">
                      ${accordionContent}
                    </div>
                  </div>
                </div>
                
            </div>`;
    } else if (resultType === "simple") {
      // Example: for industry guidance display
      return `<div class="state-guidance">
            ${additionalGuidanceLabel}
        </div>`;
    }
  } catch (error) {
    console.error("Error rendering buildStateIndustryGuidanceCard", error);
  }

  return ``;
};

const getDefaultAccordionContent = ({
  stateIndustryGuidanceData,
  activityLabel,
  searchResultData,
  language = "en",
  additionalGuidanceLabel,
}) => {
  // console.log("default accordion", activityLabel);
  // console.log("stateIndustryGuidanceData", stateIndustryGuidanceData);
  // console.log("searchResultData", searchResultData);

  let primaryGuidance = getPrimaryGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language,
  });

  let secondaryGuidance = getSecondaryGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language,
  });

  let additionalGuidance = getAdditionalGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language,
    additionalGuidanceLabel,
  });

  return `<div class="state-guidance-content">
    ${primaryGuidance}
    ${secondaryGuidance}
    ${additionalGuidance}
  </div>`;
};

const getPrimaryGuidance = ({
  data = null,
  searchResultData = null,
  language = "en",
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      let results = [];
      // console.log("searchR", searchResultData);
      let guidances = searchResultData.primary_guidance.split(",");
      // console.log(guidances, "guid");
      guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        // console.log("currentGuidance primary", guidance, currentGuidance);
        if (currentGuidance !== undefined && currentGuidance !== null) {
          // accessibility_links: ""
          // filename: "checklist-limited-services--th.pdf"
          // git_date_updated: "2020-09-03 11:56:06 -0700"
          // git_pdf_template_type: "Checklist"
          // id: "checklist-limited-services--th.pdf"
          // industry_category_key: "limited-services"
          // language: "Thai"
          // pdf_publication_date: ""
          // permalink: "https://files.covid19.ca.gov/pdf/checklist-limited-services--th.pdf"
          // summary_of_changes: ""

          currentGuidance.pdf.map((resource) => {
            // console.log("resource", resource);
            if (resource.language === "English") {
              // if (languages[resource.language] === language) { @TODO add lang code in API)
              results.push(
                `<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${resource.git_pdf_template_type}</a>  [MORE LANGUAGES]</li>`
              );
            }
            return false;
          });
        }
        return false;
      });
      console.log("results", results);
      return results.join("");
    }
  } catch (error) {
    console.error("Error in getPrimaryGuidance", error);
  }
  return "";
};

const getSecondaryGuidance = ({
  data = null,
  searchResultData = null,
  language = "en",
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      let results = [];
      // console.log("searchR", searchResultData);
      let guidances = searchResultData.secondary_guidance.split(",");
      // console.log(guidances, "guid");
      guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        // console.log("currentGuidance primary", guidance, currentGuidance);
        if (currentGuidance !== undefined && currentGuidance !== null) {
          // accessibility_links: ""
          // filename: "checklist-limited-services--th.pdf"
          // git_date_updated: "2020-09-03 11:56:06 -0700"
          // git_pdf_template_type: "Checklist"
          // id: "checklist-limited-services--th.pdf"
          // industry_category_key: "limited-services"
          // language: "Thai"
          // pdf_publication_date: ""
          // permalink: "https://files.covid19.ca.gov/pdf/checklist-limited-services--th.pdf"
          // summary_of_changes: ""

          currentGuidance.pdf.map((resource) => {
            // console.log("resource", resource);
            if (resource.language === "English") {
              // if (languages[resource.language] === language) { @TODO add lang code in API)
              results.push(
                `<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${resource.git_pdf_template_type}</a>  [MORE LANGUAGES]</li>`
              );
            }
            return false;
          });
        }
        return false;
      });
      console.log("results", results);
      return results.join("");
    }
  } catch (error) {
    console.error("Error in getSecondaryGuidance", error);
  }
  return "";
};

const getAdditionalGuidance = ({
  data = null,
  searchResultData = null,
  language = "en",
  additionalGuidanceLabel = null
}) => {

  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      let results = [];
      let guidances = searchResultData.primary_guidance.split(",");

      guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        if (
          currentGuidance !== undefined &&
          currentGuidance !== null &&
          currentGuidance.additional_resources !== undefined &&
          currentGuidance.additional_resources !== null &&
          currentGuidance.additional_resources.length > 0
        ) {
          currentGuidance.additional_resources.map((resource) => {
            console.log("resource", resource);
            results.push(`<li data-updated="${resource.date_last_modified}">
              <a href="${resource.url}">${resource.file_title}</a>
            </li>`);
          });
        }
      });
      return `
        ${results.length > 0 ? additionalGuidanceLabel : ""}
        ${results.join("")}
      `;
    }
  } catch (error) {
    console.error("Error in getAdditionalGuidance", error);
  }
  return "";
};
