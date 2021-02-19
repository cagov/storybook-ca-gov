import { buildTierCard } from "./buildTierCard";
import { buildActivityCard } from "./buildActivityCard";
import { buildCountyWebsiteLink } from "./buildCountyWebsiteLink";

/**
 * Output results of What's Open Search
 * return cardHtml
 * */

/**
 * ROADMAP
 *
 * 1. Finish pulling apart the display elements
 * 2. Clean up the data connection and labels
 * 3. Make the logic for the different displays more clear
 * 4. Get original version working in original layout.
 * 5. Connect to new data sources
 * 6. Add function to process the related guidance
 * 7. Add function to build dropdown
 * 8. Separate scss for the elements that will become their own webcomponents (we will split them out later)
 * 9. Add some props to control complexity of related guidance display
 * 10. See if there is a mobile layout
 * 11. Check the external links
 * 12. Duplicate as new component for IG page & another that's the content in other languages
 * 13. When reviewed and more or less correct, make new branch off covid19 master
 * 14. Create a staging area (name tbd)
 * 15. Copy components to new location to complete integration work
 * 16. Copy an html page for what's open and new IG pages
 * 17. Add copy changes
 * 18. Add component
 * 19. Add new data sources to covid-static & fetch from there. Send content off for translation.
 * 20. Review & QA
 * 21. Fix bugs / content changes
 * 22. Content freeze / final review
 * 23. Get translations back, test translations (import into Airtable)
 * 24. When ready to launch, Preprod / review against master (do not crawl)
 * 25. In the meantime, work on the update pipeline
 * 26. Once update pipeline is done, add Airtable review & publish buttons
 */

/**
 * Generate tier status display component.
 * // @TODO check these data types, they might be wrong.
 * @param {object} param
 * @param {string} param.selectedCounties - Definition
 * ... @TODO look up types & explain the data
 * @return {string} HTML markup rendering What's Open search results
 *
 * https://jsdoc.app/tags-param.html#parameters-with-properties
 */
export const cardTemplate = ({
  selectedCounties = null,
  selectedActivities = null,
  schoolsCanReopenList = null,
  schoolLabels = null,
  schoolReopeningStatuses = null,
  county = null,
  countyRegions = null,
  regionsclosed = null,
  tierStatusDescriptors = null,
  regionLabel = null,
  understandTheData = null,
  understandTheDataLink = null,
  countyRestrictionsAdvice = null,
  countyRestrictionsCountyWebsiteLabel = null,
  seeGuidanceText = null,
  selectedActivity = null,
  allActivities = null,
  countyWebpages = null,
  seeStateIndustryGuidanceLabel = null,
  guidanceTemplate = null,
  industryGuidancePdfLabel = null,
  checklistPdfLabel = null,
  additionalGuidanceLabel = null,
  stateIndustryGuidanceData = null,
}) => {
  console.log(
    "cardTemplate selectedCounties",
    selectedCounties,
    "selectedActivities",
    selectedActivities
  );
  console.log(
    "cardTemplate selectedCounties",
    selectedCounties.length,
    "selectedActivities",
    selectedActivities.length
  );
  let cards = [];

  if (selectedCounties.length > 0 && selectedActivities.length > 0) {
    // Some county selected
    console.log("selectedCounties and activities", selectedCounties);

    selectedCounties.forEach((selectedCounty) => {
      console.log("county Select", selectedCounty);

      let card = buildCard({
        selectedCounty,
        selectedActivity,
        selectedActivities,
        allActivities,
        selectedCounties,
        schoolsCanReopenList,
        schoolLabels,
        schoolReopeningStatuses,
        county,
        countyRegions,
        regionsclosed,
        tierStatusDescriptors,
        regionLabel,
        understandTheData,
        understandTheDataLink,
        countyRestrictionsAdvice,
        countyWebpages,
        countyRestrictionsCountyWebsiteLabel,
        seeGuidanceText,
        seeStateIndustryGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel,
        additionalGuidanceLabel,
        stateIndustryGuidanceData
      });
      cards.push(card);
    });
  } else if (selectedCounties.length > 0 && selectedActivities.length === 0) {
    // Some county selected
    console.log("selectedCounties ", selectedCounties);

    selectedCounties.forEach((selectedCounty) => {
      console.log("county Select", selectedCounty);

      let card = buildCard({
        selectedCounty,
        selectedActivity,
        selectedActivities,
        allActivities,
        selectedCounties,
        schoolsCanReopenList,
        schoolLabels,
        schoolReopeningStatuses,
        county,
        countyRegions,
        regionsclosed,
        tierStatusDescriptors,
        regionLabel,
        understandTheData,
        understandTheDataLink,
        countyRestrictionsAdvice,
        countyWebpages,
        countyRestrictionsCountyWebsiteLabel,
        seeGuidanceText,
        seeStateIndustryGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel,
        additionalGuidanceLabel,
        stateIndustryGuidanceData
      });
      cards.push(card);
    });
  } else {

    console.log("selectedActivities", selectedActivities);

    // No county selected
    selectedActivities.forEach((selectedActivity) => {
      let card = buildCard({
        selectedCounty: {
          county: ""
        },
        selectedActivity,
        selectedActivities,
        allActivities,
        selectedCounties,
        schoolsCanReopenList,
        schoolLabels,
        schoolReopeningStatuses,
        county,
        countyRegions,
        regionsclosed,
        tierStatusDescriptors,
        regionLabel,
        understandTheData,
        understandTheDataLink,
        countyRestrictionsAdvice,
        countyWebpages,
        countyRestrictionsCountyWebsiteLabel,
        seeGuidanceText,
        seeStateIndustryGuidanceLabel,
        guidanceTemplate,
        industryGuidancePdfLabel,
        checklistPdfLabel,
        additionalGuidanceLabel,
        stateIndustryGuidanceData,
      });
      cards.push(card);
    });
  }
  return cards.join("");
};

const buildCard = ({
  selectedCounty = null,
  selectedActivity,
  allActivities,
  selectedCounties = null,
  selectedActivities = null,
  schoolsCanReopenList = null,
  schoolLabels = null,
  schoolReopeningStatuses = null,
  county = null,
  regionsclosed = null,
  tierStatusDescriptors = null,
  regionLabel = null,
  understandTheData = null,
  understandTheDataLink = null,
  countyRegions = null,
  countyRestrictionsAdvice = null,
  countyRestrictionsCountyWebsiteLabel = null,
  seeGuidanceText = null,
  stayAtHomeOrder = `<p>Under <a href="/stay-home-except-for-essential-needs/#regional-stay-home-order">Regional Stay Home Order</a></p>`,
  countyWebpages = null,
  seeStateIndustryGuidanceLabel = null,
  guidanceTemplate = null,
  industryGuidancePdfLabel = null,
  checklistPdfLabel = null,
  additionalGuidanceLabel = null,
  stateIndustryGuidanceData = null,
}) => {
  
  // Create link to county covid-19 website.
  let countyWebsiteLink = buildCountyWebsiteLink({
    countyRestrictionsCountyWebsiteLabel,
    countyWebpages,
    county: `${county} County`,
  });

  // Build the tier card.
  let tierCard = buildTierCard({
    tierStatusDescriptors,
    selectedCounty,
    countyRegions,
    regionLabel,
    regionsclosed,
    stayAtHomeOrder,
    understandTheData,
    understandTheDataLink,
    countyRestrictionsAdvice,
    county,
    countyWebsiteLink,
  });

  // Build the activity card.
  let activityCards = buildActivityCard({
    selectedActivity,
    selectedActivities,
    allActivities,
    stateIndustryGuidanceData,
    showSchool: true,
    seeGuidanceText,
    regionsclosed,
    countyRegions,
    county,
    selectedCounty,
    schoolLabels,
    schoolsCanReopenList,
    seeStateIndustryGuidanceLabel,
    guidanceTemplate,
    industryGuidancePdfLabel,
    checklistPdfLabel,
    additionalGuidanceLabel,
  });

  return `
    ${tierCard}
    ${activityCards}
  `;
};
