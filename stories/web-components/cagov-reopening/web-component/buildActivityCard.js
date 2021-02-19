import { buildSchoolActivityDisplay } from "./buildSchoolActivityDisplay";
import { buildTierRestrictionActivityDisplay } from "./buildTierRestrictionActivityDisplay";
import { buildSchoolCard } from "./buildSchoolCard";
import { buildStateIndustryGuidanceCard } from "./buildStateIndustryGuidanceCard";

/**
 * Get Activity data, including schools and RSHO information.
 * @param {*} param.county - 
 * @param {*} param.selectedCounty - 
 * @param {*} param.selectedActivity - 
 * @param {*} param.selectedActivities - 
 * @param {*} param.allActivities - 
 * @param {*} param.showSchool - 
 * @param {*} param.seeGuidanceText - 
 * @param {*} param.regionsclosed - 
 * @param {*} param.countyRegions - 
 * @param {*} param.viewAll - 
 * @param {*} param.schoolLabels - 
 * @param {*} param.schoolsCanReopenList - 
 * @param {*} param.seeStateIndustryGuidanceLabel - (v2 label)
 * @param {*} param.guidanceTemplate - (v2 label)
 * @param {*} param.industryGuidancePdfLabel - (v2 label)
 * @param {*} param.checklistPdfLabel - (v2 label)
 * @param {*} param.additionalGuidanceLabel - (v2 label)
 * stateIndustryGuidanceData
 
 * @return HTML markup
 */
export const buildActivityCard = ({
  county = null,
  selectedCounty = null,
  selectedActivity = null,
  selectedActivities = null,
  allActivities = null,
  seeGuidanceText = null,
  regionsclosed = null,
  countyRegions = null,
  viewAll = false,
  schoolLabels = null,
  schoolsCanReopenList = null,
  seeStateIndustryGuidanceLabel = null,
  stateIndustryGuidanceData = null,
  guidanceTemplate = null,
  industryGuidancePdfLabel = null,
  checklistPdfLabel = null,
  additionalGuidanceLabel = null,
  hasActivityInput = false,
  hasCountyInput = false,
  policies = null,
}) => {
  // Set up strings to render conditionally.
  let schoolCard = "";
  let schoolActivityCard = "";
  let activityCard = "";
  let rshoCard = "";
  let stateGuidanceCard = "";

  let activityCards = [];

  // console.log("Build Activity Card", selectedActivity, county)
  if (hasActivityInput === true) {
    // We have selected activities
    console.log("has selected activity")
  } else if (hasCountyInput === true && hasActivityInput === false) {
    // We have a county selected, but not activities, show them all.
    selectedActivities = allActivities;
    console.log(selectedActivities.length);
  }

  // console.log("selectedActivities", selectedActivities);
  // Generate card layouts for selected activities
  if (selectedActivities.length > 0) {
    selectedActivities.forEach((searchResultData) => {
      let activityLabel = searchResultData["activity_search_autocomplete"];

      if (activityLabel === "Schools") {
        schoolCard = buildSchoolCard({
          seeGuidanceText,
          searchResultData,
          selectedCounty,
          schoolLabels,
          policies,
        });

        schoolActivityCard = buildSchoolActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          selectedCounty,
          schoolLabels,
          schoolsCanReopenList,
          county,
          policies,
        });
    }

      activityCard = buildTierRestrictionActivityDisplay({
        activityLabel,
        searchResultData,
        seeGuidanceText,
        county,
        selectedCounty,
        schoolLabels,
        policies,
      });

      // Build state guidance results
      stateGuidanceCard = buildStateIndustryGuidanceCard({
        activityLabel,
        county,
        searchResultData,
        stateIndustryGuidanceData,
        seeStateIndustryGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel,
        additionalGuidanceLabel,
        resultType: "default",
        policies,
      });

      if (policies.isUnderRSHO !== undefined && policies.isUnderRSHO === true) {
        rshoCard = searchResultData["RSHO"];
      }

      activityCards.push(`
          school:<br/> ${schoolCard}
          <br/>
          schoolActivityCard:<br/>
          ${schoolActivityCard}
          <br/>
          rshoCard:<br/>
          ${rshoCard}
          <br/>
          activity:<br/>
          ${activityCard}
          <br/>
          state-guidance:<br/>
          ${stateGuidanceCard}
        `);
    });
  }
  return activityCards.join("");
};

/**
 *
 * @param {array} param.data — Array of objects with languages
 * @return
 */
const buildMoreLanguages = ({ data = null, allowedLanguages = null }) => {
  return "languages";
};
