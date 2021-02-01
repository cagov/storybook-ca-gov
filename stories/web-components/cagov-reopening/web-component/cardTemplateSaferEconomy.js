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
 

// @TODO Look up prop types for web components & see how to document / type check them
export const cardTemplate = ({
  selectedCounties = [],
  selectedActivities = null,
  schoolsCanReopenList = null,
  schoolLabels = null,
  schoolReopeningStatuses = null,
  county = null,
  countyRegions = null,
  regionsclosed = null,
  statusdesc = null,
  regionLabel = null,
  understandTheData = null,
  countyRestrictionsAdvice = null,
  countyRestrictionsCountyWebsite = null,
  seeGuidanceText = null,
  activity = null,
  allActivities,
}) => {
  console.log("selectedCounties", selectedCounties);

  if (selectedCounties.length > 0) {
    let cards = [];
    selectedCounties.forEach((selectedCounty) => {
      let card = buildCard({
        selectedActivities,
        schoolsCanReopenList,
        schoolLabels,
        schoolReopeningStatuses,
        county,
        selectedCounty,
        countyRegions,
        regionsclosed,
        statusdesc,
        regionLabel,
        understandTheData,
        countyRestrictionsAdvice,
        countyRestrictionsCountyWebsite,
        seeGuidanceText,
        activity,
        allActivities,
      });
      cards.push(card);
    });
    console.log("cards", cards);
    return cards.join('');
  }
  return ``;
};

const buildCard = ({
  selectedActivities = null,
  schoolsCanReopenList = null,
  schoolLabels = null,
  schoolReopeningStatuses = null,
  county = null,
  selectedCounty = null,
  regionsclosed = null,
  statusdesc = null,
  regionLabel = null,
  understandTheData = null,
  countyRegions = null,
  countyRestrictionsAdvice = null,
  countyRestrictionsCountyWebsite = null,
  seeGuidanceText = null,
  stayAtHomeOrder = `<p>Under <a href="/stay-home-except-for-essential-needs/#regional-stay-home-order">Regional Stay Home Order</a></p>`,
  activity,
  allActivities,
}) => {
  let tierCard = buildTierCard({
    statusdesc,
    selectedCounty,
    countyRegions,
    regionLabel,
    regionsclosed,
    countyRestrictionsCountyWebsite,
    stayAtHomeOrder,
    understandTheData,
    countyRestrictionsAdvice
  });
  let activityCards = buildActivityCard({
    activity,
    allActivities,
    showSchool: true,
    seeGuidanceText,
    regionsclosed,
  });
  return `
  ${tierCard}

  `;
  ${activityCards}
};

// Generate tier status display component.
const buildTierCard = ({
  statusdesc = null,
  selectedCounty = null,
  countyRegions = null,
  regionLabel = null,
  regionsclosed = null,
  countyRestrictionsCountyWebsite = null,
  stayAtHomeOrder = null,
  understandTheData = null,
  countyRestrictionsAdvice = null,
}) => {
  let countyTier = null;
  let countyTierDescription = null;
  let tierStatus = null;
  let countyWebsiteLink = null;

  try {
    // @TODO the colors are flipped, we will try to flip them back.
    countyTier =
      statusdesc.Table1[parseInt(selectedCounty["Overall Status"]) - 1][
        "County tier"
      ];
    countyTierDescription =
      statusdesc.Table1[parseInt(selectedCounty["Overall Status"]) - 1]
        .description;
    tierStatus = selectedCounty["Overall Status"];

    countyWebsiteLink = buildCountyWebsiteLink({
      countyRestrictionsCountyWebsite,
    });
  } catch (error) {}

  return `<div class="card-county county-color-${tierStatus}">

        <h2>${selectedCounty.county}</h2>
        
        ${
          countyRegions
            ? "<h3>" +
              regionLabel +
              " " +
              countyRegions[selectedCounty.county] +
              "</h3>"
            : ""
        }
  
        ${
          regionsclosed &&
          countyRegions &&
          regionsclosed.Table1.filter(
            (r) => r.region === countyRegions[selectedCounty.county]
          ).length > 0
            ? stayAtHomeOrder
            : ""
        }
        
        <div class="pill">${countyTier}</div>
        
        <p>${countyTierDescription}. 
            <a href="#county-status">${understandTheData}</a>
        </p>
        
        <p>
            ${countyRestrictionsAdvice} 
            ${countyWebsiteLink}
        </p>
    </div>`;
};

const buildCountyWebsiteLink = ({ countyRestrictionsCountyWebsite }) => {
  // @TODO get new county website (look up by county)
  // Get the URL
  // Document where the data comes from
  let url = "../get-local-information";
  return `<p>
    <a href="${url}">${countyRestrictionsCountyWebsite}</a>.
</p>`;
};

const selectedCountyInRegionalStayAtHomeOrder = ({
  regionsclosed,
  countyRegions,
}) => {
  if (regionsclosed && countyRegions) {
    return (
      this.regionsclosed.Table1.filter(
        (r) => r.region === countyRegions[selectedCounty.county]
      ).length > 0
    );
  }
};

const buildActivityCard = ({
  activity,
  allActivities,
  showSchool = false,
  seeGuidanceText,
  regionsclosed
}) => {
  let isUnderRSHO = selectedCountyInRegionalStayAtHomeOrder({
    regionsclosed,
    countyRegions,
  }); // bool

  if (activity) {
    selectedActivities = [];
    this.allActivities.forEach((searchResultData) => {
      if (searchResultData["0"] == activity || activity == this.viewall) {
        selectedActivities.push(searchResultData);
      }

      if (isUnderRSHO === true) {
        return buildRSHOActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          replaceAllInMap,
        });
      } else {
        return buildTierRestrictionActivityDisplay({
          activityLabel,
          searchResultData,
          seeGuidanceText,
          replaceAllInMap,
          county,
          selectedCounty,
        });
      }
    });
  }

  let activityLabel = searchResultData["0"]; // ??

  if (showSchool === true) {
    // let schoolCard = buildSchoolCard({seeGuidanceText})
  }

  return `
  <div class="card-activity">
  <h4>${activityLabel}</h4>
  </div>`;
};

const buildRSHOActivityDisplay = ({
  activityLabel = null,
  searchResultData = null,
  seeGuidanceText = null,
  replaceAllInMap = null,
  getSchoolsCanReopen = null,
}) => {
  return `<div class="card-activity">
            <h4>${activityLabel}</h4>
            <p>${
              activityLabel === "Schools"
                ? getSchoolsCanReopen({
                    county: selectedCounty.county,
                    schoolLabels,
                  })
                : searchResultData["6"]
            }</p>
            <p>${
              activityLabel === "Schools"
                ? ""
                : searchResultData["5"].indexOf("href") > -1
                ? `${seeGuidanceText} ${replaceAllInMap(searchResultData["5"])}`
                : ""
            }</p>
          </div>`;
};

const buildTierRestrictionActivityDisplay = ({
  activityLabel = null,
  searchResultData = null,
  seeGuidanceText = null,
  replaceAllInMap = null,
  getSchoolsCanReopen = null,
  county = null,
  selectedCounty = null,
}) => {
  return `<div class="card-activity">
    <h4>${searchResultData["0"]}</h4>
    <p>${
      searchResultData["0"] === "Schools"
        ? getSchoolsCanReopen({ county, schoolLabels })
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

const getSchoolsCanReopen = ({ county, schoolLabels }) => {
  if (!schoolLabels.schools_may_reopen) {
    return "";
  }
  if (schoolOKList.indexOf(county) > -1) {
    return `<p>${schoolLabels.schools_may_reopen}</p> <p>${schoolLabels.schools_info}`;
  }
  return `<p>${schoolLabels.schools_may_not_reopen}</p> <p>${schoolLabels.schools_info}`;
};

const buildSchoolCard = ({ seeGuidanceText }) => {
  // searchResultData[selectedCounty["Overall Status"]]
  // searchResultData["6"] ??

  let schoolsDisplay =
    searchResultData["0"] === "Schools"
      ? getSchoolsCanReopen({ county: selectedCounty.county, schoolLabels })
      : searchResultData["6"]; // ?
  let guidanceDisplay =
    searchResultData["5"].indexOf("href") > -1
      ? this.translationsStrings.seeGuidanceText
      : ``; // ?

  return `
    <p>${schoolsDisplay}</p>
    `;
};
