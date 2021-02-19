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
  showSchool = false,
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
}) => {
  // Set up strings to render conditionally.
  let schoolCard = "";
  let schoolActivityCard = "";
  let activityCard = "";
  let rshoCard = "";
  let stateGuidanceCard = "";

  // Check regional stay at home order status for this county
  // (...and other policy checks as needed)
  let isUnderRSHO = selectedCountyInRegionalStayAtHomeOrder({
    regionsclosed,
    countyRegions,
    selectedCounty,
  });

  let activityCards = [];

  console.log("Build Activity Card", selectedActivity, county, allActivities)
  if (selectedActivity !== null && selectedActivity !== "" && selectedActivity.length > 0) {

  } else if (county !== null) {
    selectedActivities = allActivities;
    console.log(selectedActivities.length);
  } else {

  }
  // Generate card layouts for selected activities
  if (selectedActivities.length > 0) {
    selectedActivities.forEach((searchResultData) => {
      let activityLabel = searchResultData["0"];

      if (showSchool === true) {
        schoolCard = buildSchoolCard({
          seeGuidanceText,
          searchResultData,
          selectedCounty,
          schoolLabels,
          policies: {
            isUnderRSHO: isUnderRSHO,
          },
        });
      }

      schoolActivityCard = buildSchoolActivityDisplay({
        activityLabel,
        searchResultData,
        seeGuidanceText,
        selectedCounty,
        schoolLabels,
        schoolsCanReopenList,
        county,
        policies: {
          isUnderRSHO: isUnderRSHO,
        },
      });

      activityCard = buildTierRestrictionActivityDisplay({
        activityLabel,
        searchResultData,
        seeGuidanceText,
        county,
        selectedCounty,
        schoolLabels,
        policies: {
          isUnderRSHO: isUnderRSHO,
        },
      });

      // Build state guidance results
      stateGuidanceCard = buildStateIndustryGuidanceCard({
        activityLabel,
        county,
        stateIndustryGuidanceData,
        seeStateIndustryGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel,
        additionalGuidanceLabel,
        resultType: "default",
        policies: {
          isUnderRSHO: isUnderRSHO,
        },
      });
      activityCards.push(`
          ${schoolCard}
          ${activityCard}
          ${stateGuidanceCard}
        `);
    });
  }
  return activityCards.join("");
};

/**
 * Check if the current selected county is in one of the RSHO closed regions.
 * @param {*} param0
 * @return {bool}
 */
const selectedCountyInRegionalStayAtHomeOrder = ({
  regionsclosed = null,
  countyRegions = null,
  selectedCounty = null,
}) => {
  try {
    if (regionsclosed && countyRegions && selectedCounty) {
      return (
        regionsclosed.filter(
          (r) => r.region === countyRegions[selectedCounty.county]
        ).length > 0
      );
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

/**
 *
 * @param {array} param.data — Array of objects with languages
 * @return
 */
const buildMoreLanguages = ({ data = null, allowedLanguages = null }) => {
  return "languages";
};
