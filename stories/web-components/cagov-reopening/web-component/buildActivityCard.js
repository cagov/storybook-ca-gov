
export const buildActivityCard = ({
    activity = null,
    allActivities = null,
    showSchool = false,
    seeGuidanceText = null,
    regionsclosed = null,
    countyRegions = null,
    selectedCounty = null,
    viewAll = false,
    schoolLabels = null,
    schoolsCanReopenList = null,
  }) => {
    let isUnderRSHO = selectedCountyInRegionalStayAtHomeOrder({
      regionsclosed,
      countyRegions,
      selectedCounty,
    }); // bool
  
    if (activity) {
      let selectedActivities = [];
      allActivities.forEach((searchResultData) => {
        let activityLabel = searchResultData["0"]; // ??
  
        if (searchResultData["0"] == activity || activity == viewAll) {
          selectedActivities.push(searchResultData);
        }
  
        if (showSchool === true) {
          // let schoolCard = buildSchoolCard({seeGuidanceText})
        }
  
        if (isUnderRSHO === true) {
          return buildRSHOActivityDisplay({
            activityLabel,
            searchResultData,
            seeGuidanceText,
            selectedCounty,
            schoolLabels,
            schoolsCanReopenList,
          });
        } else {
          return buildTierRestrictionActivityDisplay({
            activityLabel,
            searchResultData,
            seeGuidanceText,
            county,
            selectedCounty,
          });
        }
      });
    }
  };

  const selectedCountyInRegionalStayAtHomeOrder = ({
    regionsclosed = null,
    countyRegions = null,
    selectedCounty = null,
  }) => {
    try {
      if (regionsclosed && countyRegions && selectedCounty) {
        return (
          regionsclosed.Table1.filter(
            (r) => r.region === countyRegions[selectedCounty.county]
          ).length > 0
        );
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };
  