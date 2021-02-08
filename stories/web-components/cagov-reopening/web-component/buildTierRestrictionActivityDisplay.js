export const buildTierRestrictionActivityDisplay = ({
  activityLabel = null,
  searchResultData = null,
  seeGuidanceText = null,
  replaceAllInMap = null,
  county = null,
  selectedCounty = null,
}) => {
  return `<div class="card-activity">
    <h4>${searchResultData["0"]}</h4>
    <p>${
      searchResultData["0"] === "Schools"
        ? buildSchoolsCanReopen({ county, schoolLabels })
        : searchResultData[selectedCounty["Overall Status"]]
    }</p>
    <p>${
      searchResultData["0"] === "Schools"
        ? ""
        : searchResultData["5"].indexOf("href") > -1
        ? `${seeGuidanceText} ${replaceAllInMap(searchResultData["5"])}`
        : ""
    }</p>
  </div>`;
};