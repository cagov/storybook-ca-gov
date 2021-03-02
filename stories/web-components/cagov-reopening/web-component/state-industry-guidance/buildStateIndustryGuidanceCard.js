import { replaceMarkupAttributeContent } from "./../replaceMarkupAttributeContent";
import { getMoreLanguages } from "./getMoreLanguages";
import "./state-industry-guidance.scss";
import marked from "marked";

/**
 * Generate interactive list of state industry guidance
 *
 * @param {string} param.activityLabel - Activity name (from autocomplete search)
 * @param {string} param.county - County name
 * @param {object} param.stateIndustryGuidanceData - Data source keyed by industy_category_key
 * @param {object} param.searchResultData - Matched result from autocomplete activity search
 * @param {string} param.seeStateIndustryGuidanceLabel - Label
 * @param {string} param.guidanceTemplate - Label, with markup string replacement
 * @param {string} param.industryGuidancePdfLabel - Label, with markup string replacement
 * @param {string} param.checklistPdfLabel - Label, with markup string replacement
 * @param {string} param.additionalGuidanceLabel - Label
 * @param {string} param.resultType - "default" or "simple" - what layout for the results (used for embedding in different contexts)
 * @param {string} param.language - Language code, e.g. "en" or "es" or "zh-hant" (we have a table of codes in languages-keys csv file from Airtable)
 * @param {bool} param.expanded - If accordion should be open by default.
 */
export const buildStateIndustryGuidanceCard = ({
  activityLabel = null,
  county = null,
  stateIndustryGuidanceData = null,
  searchResultData = null,
  seeStateIndustryGuidanceLabel = "See state industry guidance",
  guidanceTemplate = `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
  industryGuidancePdfLabel = `Industry guidance for <span data-attribute="activityLabel"></span>`,
  checklistPdfLabel = `Checklist for <span data-attribute="activityLabel"></span>`,
  additionalGuidanceLabel = "Depending on your business operations, other guidance may apply",
  resultType = "default",
  language = "en",
  expanded = false,
}) => {
  // @TODO Add dropdown interactive list box
  try {
    if (resultType === "default") {
      let accordionContent = getAccordionContent({
        stateIndustryGuidanceData,
        activityLabel,
        searchResultData,
        language,
        additionalGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel,
      });
      {
        /* <cagov-accordion> </cagov-accordion> */
      }
      return `
              <div class="state-guidance">
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
            </div>
       `;
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
const getAccordionContent = ({
  stateIndustryGuidanceData,
  activityLabel,
  searchResultData,
  language = "en",
  additionalGuidanceLabel = null,
  guidanceTemplate = null,
  industryGuidancePdfLabel = null,
  checklistPdfLabel = null,
}) => {
  // let sortedGuidances = guidances
  let primaryGuidances = searchResultData.primary_guidance.split(",");
  primaryGuidances = primaryGuidances.map((item, index) => item.trim());
  // console.log("primaryGuidances", primaryGuidances);
  // console.log(
  //   primaryGuidances.includes(searchResultData.activity_reference_key)
  // );
  // console.log(searchResultData.activity_reference_key);
  let currentGuidanceInList = false;
  if (primaryGuidances.includes(searchResultData.activity_reference_key)) {
    currentGuidanceInList = true;
  }
  if (currentGuidanceInList) {
    // Bump current guidance to the top of the list of sets of guidances.
    let firstResult = searchResultData.activity_reference_key;
    primaryGuidances = primaryGuidances.sort(function (x, y) {
      return x == firstResult ? -1 : y == firstResult ? 1 : 0;
    });
  }

    // let sortedGuidances = guidances
    let secondaryGuidances = searchResultData.secondary_guidance.split(",");
    secondaryGuidances = secondaryGuidances.map((item, index) => item.trim());
    // console.log("secondaryGuidances", secondaryGuidances);
    // console.log(
    //   secondaryGuidances.includes(searchResultData.activity_reference_key)
    // );
    // console.log(searchResultData.activity_reference_key);
    let currentGuidanceInListSecondary = false;
    if (secondaryGuidances.includes(searchResultData.activity_reference_key)) {
      currentGuidanceInListSecondary = true;
    }
    if (currentGuidanceInListSecondary) {
      // Bump current guidance to the top of the list of sets of guidances.
      let firstResultSecondary = searchResultData.activity_reference_key;
      secondaryGuidances = secondaryGuidances.sort(function (x, y) {
        return x == firstResultSecondary ? -1 : y == firstResultSecondary ? 1 : 0;
      });
    }

  let guidancesString = getListGuidances({
    guidance: searchResultData.primary_guidance,
    data: stateIndustryGuidanceData,
    searchResultData,
    language: "en",
    template: `<span><span data-attribute="guidances"></span></span>`,
  });

  // If a generic message about guidance needs to come from
  let searchResultGuidanceMessage = "";

  // Perform replacements to selector data.
  let guidanceMessage = "";
  // if (currentGuidanceInList === false) {
    guidanceMessage = replaceMarkupAttributeContent({
      markup: guidanceTemplate,
      selector: "[data-attribute=activityLabel]",
      content: activityLabel,
    });

    // Again with different attribute.
    guidanceMessage = replaceMarkupAttributeContent({
      markup: guidanceMessage,
      selector: "[data-attribute=guidances]",
      content: guidancesString,
    });
  // }

  // Get primary guidance list
  let primaryGuidance = getPrimaryGuidance({
    data: stateIndustryGuidanceData,
    guidances: primaryGuidances,
    searchResultData,
    language,
    labelGuidance: industryGuidancePdfLabel,
    labelChecklist: checklistPdfLabel,
  });

  // Get secondary guidance list
  let secondaryGuidance = getSecondaryGuidance({
    data: stateIndustryGuidanceData,
    guidances: secondaryGuidances,
    searchResultData,
    language,
    labelGuidance: industryGuidancePdfLabel,
    labelChecklist: checklistPdfLabel,
  });

  console.log("secondary Guidance", secondaryGuidance);

  // Get additional guidance
  let additionalGuidance = getAdditionalGuidance({
    data: stateIndustryGuidanceData,
    guidance: searchResultData.additional_resources,
    language,
    searchResultData,
    label: additionalGuidanceLabel,
  });

  return `<div class="state-guidance-content">
    <div class="guidance-label">${guidanceMessage}</div>
    <div class="result-guidance-message">${searchResultGuidanceMessage}</div>
    <div class="primary-guidance">${primaryGuidance}</div>
    <div class="secondary-guidance">${secondaryGuidance}</div>
    <div class="additional-guidance">${additionalGuidance}</div>
  </div>`;
};

/**
 * Build list of applicable guidances as string.
 *
 * @param {object} param.data
 * @param {object} param.guidance
 * @param {object} param.language
 * @param {object} param.label
 * @param {object} param.template
 */
const getListGuidances = ({
  data = null,
  guidance = null,
  searchResultData = null,
  language = "en",
  label = null,
  template = `<span><span data-attribute="guidances"></span></span>`,
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null &&
      guidance !== null
    ) {
      let results = [];

      let guidances = guidance.split(",");
      guidances.map((guidance_key) => {
        let lookupGuidance = data[guidance_key.trim()]; // Remove extra space added by comma separated split function
        if (lookupGuidance !== undefined && lookupGuidance !== null) {
          results.push(
            `<span class="guidance">${lookupGuidance.industry_category_label}</span>`
          );
        }
      });
      let concatenatedString = results.join(", "); // @TODO adjustments for language display.
      let markup = replaceMarkupAttributeContent({
        markup: template,
        selector: "[data-attribute=guidances]",
        content: concatenatedString,
      });

      return markup;
    }
  } catch (error) {
    console.error("Error in get list of guidance as string", error);
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
  guidances = null,
  labelGuidance = null,
  labelChecklist = null,
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null &&
      guidances !== undefined &&
      guidances !== null
    ) {
      let results = [];

      guidances.map((guidance_key) => {
        let currentGuidance = data[guidance_key.trim()];
        console.log("currentGuidance", currentGuidance);

        if (currentGuidance !== undefined && currentGuidance !== null) {
          let optionalMessage = getOptionalPrimaryGuidanceMessage({
            currentGuidance,
          });

          let guidanceListLink = getGuidanceLink({
            currentGuidance,
            label: labelGuidance,
            type: "Guidance",
            language: "en",
          });

          let checklistListLink = getGuidanceLink({
            currentGuidance,
            label: labelChecklist,
            type: "Checklist",
            language: "en",
          });

          results.push(`
            <h3>${currentGuidance.industry_category_label}</h3>
            ${optionalMessage}
            ${guidanceListLink}
            ${checklistListLink}
          `);
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
  guidances = null,
  labelGuidance = null,
  labelChecklist = null,
}) => {
  try {
    if (
      data !== undefined &&
      data !== null &&
      searchResultData !== undefined &&
      searchResultData !== null &&
      guidances !== undefined &&
      guidances !== null
    ) {
      let results = [];

      guidances.map((guidance_key) => {
        let currentGuidance = data[guidance_key.trim()];
        console.log("currentGuidance", currentGuidance);

        if (currentGuidance !== undefined && currentGuidance !== null) {
          let optionalMessage = getOptionalPrimaryGuidanceMessage({
            currentGuidance,
          });

          let guidanceListLink = getGuidanceLink({
            currentGuidance,
            label: labelGuidance,
            type: "Guidance",
            language: "en",
          });

          let checklistListLink = getGuidanceLink({
            currentGuidance,
            label: labelChecklist,
            type: "Checklist",
            language: "en",
          });

          results.push(`
            <h3>${currentGuidance.industry_category_label}</h3>
            ${optionalMessage}
            ${guidanceListLink}
            ${checklistListLink}
          `);
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
          let sortedLinks = currentGuidance.additional_resources.sort((a, b) => (Number(a.order) > Number(b.order)) ? 1 : -1)

          sortedLinks.map((resource) => {
            if (resource.message !== null && resource.message !== "") {
              results.push(`<div class="guidance-link guidance-link-additional" data-updated="${resource.date_last_modified}">${marked(resource.message)}
            </div>`);
            } else if (resource.url) {
              results.push(`<div class="guidance-link guidance-link-additional" data-updated="${resource.date_last_modified}">
              <a href="${resource.url}">${resource.file_title}</a>
            </div>`);
            }
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

/**
 * Get optional message from metadata for currently selected guidance.
 * @param {*} param.currentGuidance - Data object for currently selected guidance.
 */
const getOptionalPrimaryGuidanceMessage = ({ currentGuidance }) => {
  if (
    currentGuidance.metadata !== undefined &&
    currentGuidance.metadata !== null &&
    currentGuidance.metadata[0] !== undefined &&
    currentGuidance.metadata[0] !== null
  ) {
    if (currentGuidance.metadata[0].optional_message !== undefined) {
      return currentGuidance.metadata[0].optional_message;
    }
  }
  return "";
};

const getGuidanceLink = ({
  currentGuidance,
  label,
  type = null,
  language = "en",
}) => {
  let resourceLink = currentGuidance.pdf.filter((resource) => {
    if (
      resource.language_code === language &&
      resource.git_pdf_template_type === type
    ) {
      return true;
    }
    return false;
  });

  let link = "";
  if (resourceLink !== undefined && resourceLink.length > 0) {
    let linkLabel = replaceMarkupAttributeContent({
      markup: label,
      selector: "[data-attribute=activityLabel]",
      content: resourceLink[0].industry_category_label,
    });

    let moreLanguages = getMoreLanguages({
      links: currentGuidance.pdf,
      language: language,
      type: type,
    });
    if (resourceLink[0].permalink) {
      link = `<div class="guidance-link" data-updated="${resourceLink[0].git_date_updated}"><a href="${resourceLink[0].permalink}">${linkLabel}</a> ${moreLanguages}</div>`;
    }
  }
  return link;
};
