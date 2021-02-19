import { replaceAllInMap } from "./getCountyMap";
import { buildSchoolsCanReopen } from "./buildSchoolsCanReopen";

export const buildTierRestrictionActivityDisplay = ({
  activityLabel = null,
  searchResultData = null,
  seeGuidanceText = null,
  county = null,
  selectedCounty = null,
  schoolLabels = null,
}) => {
  console.log("buildTierRestrictionActivityDisplay", searchResultData);

  let schoolReopeningText = "";

  // Handle special templates for special content.
  if (activityLabel === "Schools") {
    schoolReopeningText = buildSchoolsCanReopen({ county, schoolLabels });
    return `<div class="card-activity">
    
    <h4>${activityLabel}</h4>

    <p>${schoolReopeningText}</p>

    <p></p>
  </div>`;
  } else {
    console.log("county", county, searchResultData);

    let modificationStatus = "";
    if (
      county !== null &&
      selectedCounty !== undefined &&
      selectedCounty !== null &&
      selectedCounty["Overall Status"] !== undefined
    ) {
      modificationStatus = searchResultData[selectedCounty["Overall Status"]];
    }

    return `<div class="card-activity">
    
    <h4>${activityLabel}</h4>

    <p>${modificationStatus}</p>

    <p>${
      searchResultData["5"].indexOf("href") > -1
        ? `${seeGuidanceText} ${replaceAllInMap(searchResultData["5"])}`
        : ""
    }</p>

  </div>`;
  }
};
