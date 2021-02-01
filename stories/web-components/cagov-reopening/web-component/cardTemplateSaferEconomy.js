/**
 * Output results of What's Open Search
 * return cardHtml
 * */

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
      console.log("card", card);
      cards.push(card);
    });
    console.log("cards", cards);
    //.length > 0 ? cards.join("") : null
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
//   let activityCards = buildActivityCard({
//     activity,
//     allActivities,
//     showSchool: true,
//     regionsclosed
//   });
  return `
  ${tierCard}

  `;
//   ${activityCards}
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
