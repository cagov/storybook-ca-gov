import { replaceMarkupAttributeContent } from "./replaceMarkupAttributeContent";

export const buildStateIndustryGuidanceCard = ({
  activityLabel,
  county,
  stateIndustryGuidanceData,
  searchResultData,
  seeStateIndustryGuidanceLabel = "See state industry guidance", // @TODO add as data label
  guidanceTemplate = `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
  industryGuidancePdfLabel = `Industry guidance for <span data-attribute="activityLabel"></span>`,
  checklistPdfLabel = `Checklist for <span data-attribute="activityLabel"></span>`,
  additionalGuidanceLabel = "Depending on your business operations, other guidance may apply",
  resultType = "default",
  language = "en",
}) => {
  // @TODO Add accordion syntax (cagov-accordion or make a new variation)
  // @TODO Add dropdown interactive list box

  try {
    if (resultType === "default") {
      let accordionContent = getDefaultAccordionContent({
        stateIndustryGuidanceData,
        activityLabel,
        searchResultData,
        language,
        additionalGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel
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
        
        </div>`;
    }
  } catch (error) {
    console.error("Error rendering buildStateIndustryGuidanceCard", error);
  }

  return ``;
};

/**
 *
 * @param {object} param.stateIndustryGuidanceData - All state industry guidance
 */
const getDefaultAccordionContent = ({
  stateIndustryGuidanceData,
  activityLabel,
  searchResultData,
  language = "en",
  additionalGuidanceLabel = null,
  guidanceTemplate = null,
  industryGuidancePdfLabel = null,
  checklistPdfLabel = null,
}) => {
  // console.log("default accordion", activityLabel);
  // console.log("stateIndustryGuidanceData", stateIndustryGuidanceData);
  // console.log("searchResultData", searchResultData);

  // <span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>

  let guidances = "";

  // Get meta content

  // @TODO add messages

  let guidanceMessage = replaceMarkupAttributeContent({
    markup: guidanceTemplate,
    selector: "[data-attribute=activityLabel]",
    content: activityLabel,
  });

  guidanceMessage = replaceMarkupAttributeContent({
    markup: guidanceMessage,
    selector: "[data-attribute=guidances]",
    content: "guidances",
  });

  let primaryGuidance = getPrimaryGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language,
    labelGuidance: industryGuidancePdfLabel,
    labelChecklist: checklistPdfLabel,
  });

  // let secondaryGuidance = getSecondaryGuidance({
  //   data: stateIndustryGuidanceData,
  //   searchResultData,
  //   language,
  //   labelGuidance: industryGuidancePdfLabel,
  //   labelChecklist: checklistPdfLabel,
  // });

  let additionalGuidance = getAdditionalGuidance({
    data: stateIndustryGuidanceData,
    searchResultData,
    language,
    label: additionalGuidanceLabel,
  });
//     ${secondaryGuidance}
  return `<div class="state-guidance-content">
    ${guidanceMessage}
    ${primaryGuidance}

    ${additionalGuidance}
  </div>`;
};

const getListGuidances = ({
  data = null,
  searchResultData = null,
  language = "en",
  label = null,
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

      // @TODO use meta
      // guidances.map((guidance) => {
      //   let currentGuidance = data[guidance];
      //   // console.log("currentGuidance primary", guidance, currentGuidance);
      //   if (currentGuidance !== undefined && currentGuidance !== null) {
      //     currentGuidance.pdf.map((resource) => {
      //       // console.log("resource", resource);
      //       if (resource.language === "English") {
      //         // if (languages[resource.language] === language) { @TODO add lang code in API)
      //         results.push(
      //           `${resource.industry_category_key}`
      //         );
      //       }
      //       return false;
      //     });
      //   }
      //   return false;
      // });
      // console.log("results", results);
      return results.join("");
    }
  } catch (error) {
    console.error("Error in getPrimaryGuidance", error);
  }
  return "";
};

/**
 *
 * @param {object} param.data - Set of PDF Links
 */
const getPrimaryGuidance = ({
  data = null,
  searchResultData = null,
  language = "en",
  labelGuidance = null,
  labelChecklist = null,
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      let results = [];
      let linkLabel = "";
      // console.log("searchR", searchResultData);
      let guidances = searchResultData.primary_guidance.split(",");
      // console.log(guidances, "guid");
      guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        if (currentGuidance !== undefined && currentGuidance !== null) {
          let guidanceLink = currentGuidance.pdf.filter((resource) => {
            console.log("resource", resource);
            if (resource.language_code === "en" && resource.git_pdf_template_type === "Guidance") {
              let linkLabel = replaceMarkupAttributeContent({
                markup: labelGuidance,
                selector: "[data-attribute=activityLabel]",
                content: "industryLabel ",
              });

              let moreLanguages = "More Languages 1";

              return `<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${linkLabel}</a> ${moreLanguages}</li>`;
            }
            return false;
          });

          let checklistLink = currentGuidance.pdf.filter((resource) => {
            if (resource.language_code === "en" && resource.git_pdf_template_type === "Checklist") {
              let linkLabel = replaceMarkupAttributeContent({
                markup: labelChecklist,
                selector: "[data-attribute=activityLabel]",
                content: "industryLabel ",
              });

              let moreLanguages = "More Languages 2";

              return `<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${linkLabel}</a> ${moreLanguages}</li>`;
            }
            return false;
          });

          return `
          ${guidanceLink}
          ${checklistLink}
          `;


        }
        return false;
      });
      // console.log("results", results);
      return results.join("");
    }
  } catch (error) {
    console.error("Error in getPrimaryGuidance", error);
  }
  return "";
};

/**
 *
 * @param {object} param.data - Set of PDF Links
 */
const getSecondaryGuidance = ({
  data = null,
  searchResultData = null,
  language = "en",
  label = null,
  labelGuidance = null,
  labelChecklist = null,
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null
    ) {
      let results = [];
      let linkLabel = "";
      let guidances = searchResultData.secondary_guidance.split(",");
      guidances.map((guidance) => {
        let currentGuidance = data[guidance];
        if (currentGuidance !== undefined && currentGuidance !== null) {
          let sortedPdfs = currentGuidance.pdf.sort((a, b) => (a.order > b.order) ? 1 : -1)
          sortedPdfs.map((resource) => {
            // console.log("resource", resource);
            if (resource.language === "English") {
              if (resource.git_pdf_template_type === "Guidance") {
                linkLabel = replaceMarkupAttributeContent({
                  markup: labelGuidance,
                  selector: "[data-attribute=activityLabel]",
                  content: "industryLabel ",
                });
                results.push(
                  `<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${linkLabel}</a>  [MORE LANGUAGES]</li>`
                );
              } else if (resource.git_pdf_template_type === "Checklist") {
                linkLabel = replaceMarkupAttributeContent({
                  markup: labelChecklist,
                  selector: "[data-attribute=activityLabel]",
                  content: "industryLabel ",
                });
                results.push(
                  `<li data-updated="${resource.git_date_updated}"><a href="${resource.permalink}">${linkLabel}</a>  [MORE LANGUAGES]</li>`
                );
              }
            }
            return false;
          });
        }
        return false;
      });
      // console.log("results", results);
      return results.join("");
    }
  } catch (error) {
    console.error("Error in getPrimaryGuidance", error);
  }
  return "";
};

/**
 *
 * @param {object} param.data - Set of PDF Links
 */
const getAdditionalGuidance = ({
  data = null,
  searchResultData = null,
  language = "en",
  label = null,
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

          // let sortedPdfs = currentGuidance.pdf.sort((a, b) => (a.order > b.order) ? 1 : -1)

          currentGuidance.additional_resources.map((resource) => {
            // console.log("resource", resource);
            results.push(`<li data-updated="${resource.date_last_modified}">
              <a href="${resource.url}">${resource.file_title}</a>
            </li>`);
          });
        }
      });
      return `
        ${results.length > 0 ? label : ""}
        ${results.join("")}
      `;
    }
  } catch (error) {
    console.error("Error in getAdditionalGuidance", error);
  }
  return "";
};

// @TODO Set up
const getMoreLanguages = () => {
  return `
  <ul class="dropdown-menu-inline">
    <li><a href="http://files">Language</a></li>
    <li><a href="#">Language</a></li>
    <li><a href="#">Language</a></li>
    <li><a href="#">Language</a></li>
    <li><a href="#">Language</a></li>
  </ul>
  `;
};
