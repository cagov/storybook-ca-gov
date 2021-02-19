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

  let isUnderRSHO = selectedCountyInRegionalStayAtHomeOrder({
    regionsclosed,
    countyRegions,
    selectedCounty,
  });

  console.log("activity card", selectedActivity);

  let activityCards = [];

  if (selectedActivity !== null) {
    // Generate card layouts for selected activities
    if (selectedActivities.length > 0) {
      selectedActivities.forEach((searchResultData) => {
        let activityLabel = searchResultData["0"];

        console.log("activity label", activityLabel);
        let schoolCard = "";
        if (showSchool === true) {
          schoolCard = buildSchoolCard({
            seeGuidanceText,
            searchResultData,
            selectedCounty,
            schoolLabels,
          });
        }

        let schoolActivityCard = "";
        schoolActivityCard = buildSchoolActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          selectedCounty,
          schoolLabels,
          schoolsCanReopenList,
          county,
        });

        let activityCard = "";
        let rshoCard = "";
        // console.log("activitySchoolCard:", activityCard);
        if (isUnderRSHO !== true) {
          // Debugging
          // Reference
          // if(this.regionsclosed && this.countyRegions && this.regionsclosed.Table1.filter(r => r.region === this.countyRegions[item.county]).length > 0) { // if this county is in a region which is closed we will show them the RSHO column values
          //   this.cardHTML += `<div class="card-activity">
          //     <h4>${ac["0"]}</h4>
          //     <p>${ac["0"] === "Schools" ? schoolShenanigans(item.county) : ac["6"]}</p>
          //     <p>${ac["0"] === "Schools" ? "" : ac["5"].indexOf('href') > -1 ? `${this.json.seeGuidanceText} ${replaceAllInMap(ac["5"])}` : ""}</p>
          //   </div>`
          // } else {
          //   this.cardHTML += `<div class="card-activity">
          //     <h4>${ac["0"]}</h4>
          //     <p>${ac["0"] === "Schools" ? schoolShenanigans(item.county) : ac[item['Overall Status']]}</p>
          //     <p>${ac["0"] === "Schools" ? "" : ac["5"].indexOf('href') > -1 ? `${this.json.seeGuidanceText} ${replaceAllInMap(ac["5"])}` : ""}</p>
          //   </div>`

        } 

        activityCard = buildTierRestrictionActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          county,
          selectedCounty,
          schoolLabels,
        });

        let stateGuidanceCard = "";


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
          resultType: "default"
        });

        activityCards.push(`
          ${schoolCard}
          ${activityCard}
          ${stateGuidanceCard}
        `);
      });
    }
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
const buildMoreLanguages = ({
  data = null,
  allowedLanguages = null,

}) => {

  return "languages";
}