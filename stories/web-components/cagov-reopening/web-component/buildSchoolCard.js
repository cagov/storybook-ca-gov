
export const buildSchoolCard = ({ seeGuidanceText }) => {
    // searchResultData[selectedCounty["Overall Status"]]
    // searchResultData["6"] ??
  
    let schoolsDisplay =
      searchResultData["0"] === "Schools"
        ? buildSchoolsCanReopen({ county: selectedCounty.county, schoolLabels })
        : searchResultData["6"]; // ?
    let guidanceDisplay =
      searchResultData["5"].indexOf("href") > -1
        ? this.translationsStrings.seeGuidanceText
        : ``; // ?
  
    return `
      <p>${schoolsDisplay}</p>
      `;
  };