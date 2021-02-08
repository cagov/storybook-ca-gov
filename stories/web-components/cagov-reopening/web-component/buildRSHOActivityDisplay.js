
export const buildRSHOActivityDisplay = ({
    activityLabel = null,
    searchResultData = null,
    seeGuidanceText = null,
    selectedCounty = null,
    schoolLabels = null,
  }) => {
    return `<div class="card-activity">
              <h4>${activityLabel}</h4>
              <p>${
                activityLabel === "Schools"
                  ? buildSchoolsCanReopen({
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