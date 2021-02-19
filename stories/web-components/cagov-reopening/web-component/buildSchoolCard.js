
import { buildSchoolsCanReopen } from "./buildSchoolsCanReopen";

export const buildSchoolCard = ({ 
  seeGuidanceText, 
  searchResultData,
  selectedCounty,
  schoolLabels
}) => {
  
    let schoolsDisplay =
      searchResultData["activity_search_autocomplete"] === "Schools"
        ? buildSchoolsCanReopen({ county: selectedCounty.county, schoolLabels })
        : searchResultData["6"]; // ?

    return `
      <p>${schoolsDisplay}</p>
      `;
  };