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
        language
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
                      ${additionalGuidanceLabel}
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
  language = "en"
}) => {
  // console.log("default accordion", activityLabel);
  // console.log("stateIndustryGuidanceData", stateIndustryGuidanceData);
  // console.log("searchResultData", searchResultData);

  let primaryGuidance = getPrimaryGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language
  });

  let secondaryGuidance = getPrimaryGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language
  });

  let additionalGuidance = getAdditionalGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language
  });
//    ${secondaryGuidance}
  return `<div class="state-guidance-content">
    ${primaryGuidance}

    ${additionalGuidance}
  </div>`;
};

const getPrimaryGuidance = ({ data = null, searchResultData = null, language = "en" }) => {
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
              results.push(`<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${resource.git_pdf_template_type}</a>  [MORE LANGUAGES]</li>`);
            }
            return false;
          });
        }
        return false;
      });
      console.log("results", results);
      return results.join("")
    }
  } catch (error) {
    console.error("Error in getPrimaryGuidance", error);
  }
  return "";
};

const getSecondaryGuidance = ({ data = null, searchResultData = null, language = "en" }) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      
      let guidances = searchResultData.secondary_guidance.split(",");
      return guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        // console.log("currentGuidance secondary", guidance, currentGuidance);
        if (currentGuidance !== undefined && currentGuidance !== null) {

        }
        return null;
      });
    }
  } catch (error) {
    console.error("Error in getSecondaryGuidance", error);
  }
  return "";
};

const getAdditionalGuidance = ({ data = null, searchResultData = null, language = "en" }) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      
      let guidances = searchResultData.primary_guidance.split(",");
      console.log(guidances, "guid");
      return guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        // console.log(
        //   "currentGuidance additional resources",
        //   guidance,
        //   currentGuidance
        // );
        if (
          currentGuidance !== undefined &&
          currentGuidance !== null &&
          currentGuidance.additional_resources !== undefined && 
          currentGuidance.additional_resources !== null && 
          currentGuidance.additional_resources.length > 0
        ) {
          
          // date_last_modified: "2021-01-16T01:46:00.000Z"
          // file_title: "COVID-19 and Reopening In-Person Instruction Framework & Public Health Guidance for K-12 Schools in California, 2020-2021 School Year"
          // id: 35
          // industry_category_key: "schools"
          // language: "English"
          // message: ""
          // order: 1
          // type: "guidance"
          // url: "https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/COVID-19/Conso

          return currentGuidance.additional_resources.map((resource) => {
            console.log("resource", resource);
            return `<li data-updated="${resource.date_last_modified}"><a href="${resource.url}">${resource.file_title}</a></li>`;
          });
        }
        return null;
      });
    }
  } catch (error) {
    console.error("Error in getAdditionalGuidance", error);
  }
  return "";
};
