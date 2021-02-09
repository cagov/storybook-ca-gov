import { buildRSHOActivityDisplay } from "./buildRSHOActivityDisplay";
import { buildTierRestrictionActivityDisplay } from "./buildTierRestrictionActivityDisplay";
import { buildSchoolCard } from "./buildSchoolCard";

/**
 * Get Activity data, including schools and RSHO information.
 * @param {*} param0 
 * @return HTML markup
 */
export const buildActivityCard = ({
  county = null,
  selectedCounty = null,
  activity = null,
  allActivities = null,
  showSchool = false,
  seeGuidanceText = null,
  regionsclosed = null,
  countyRegions = null,
  viewAll = false,
  schoolLabels = null,
  schoolsCanReopenList = null,
}) => {
  let isUnderRSHO = selectedCountyInRegionalStayAtHomeOrder({
    regionsclosed,
    countyRegions,
    selectedCounty,
  }); // {bool}

  let activityCards = [];
  if (activity) {
    let selectedActivities = [];
    allActivities.forEach((searchResultData) => {
      let activityLabel = searchResultData["0"];

      // @TODO viewAll logic here is a little weird & use case not clear
      if (searchResultData["0"] == activity || activity == viewAll) {
        selectedActivities.push(searchResultData);
      }

      let schoolCard = "";
      if (showSchool === true) {
        schoolCard = buildSchoolCard({
          seeGuidanceText,
          searchResultData,
          selectedCounty,
          schoolLabels,
        });
      }

      let activityCard = "";
      if (isUnderRSHO === true) {
        activityCard = buildRSHOActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          selectedCounty,
          schoolLabels,
          schoolsCanReopenList,
          county,
        });
        // console.log("activityCard (rsho):", activityCard);
      } else {
        activityCard = buildTierRestrictionActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          county,
          selectedCounty,
          schoolLabels,
        });
        // console.log("activityCard (tier restriction):", activityCard);
      }
      activityCards.push(`
          ${schoolCard}
          ${activityCard}
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
