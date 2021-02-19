import { replaceAllInMap } from "./getCountyMap";
import { buildSchoolsCanReopen } from "./buildSchoolsCanReopen";

/**
 *
 * @param {*} param0
 * @return HTML markup
 */
export const buildSchoolActivityDisplay = ({
  activityLabel = null,
  searchResultData = null,
  seeGuidanceText = null,
  selectedCounty = null,
  schoolLabels = null,
}) => {

  // activity_search_autcomplete   =  0: "Amusement parks"
  // Overall Status 1 = 1: "Larger parks open with modifications<br>– 25% capacity<br>– Reservations or advanced tickets required"
  // Overall Status 2 == 2: "Smaller parks open with modifications<br>– 25% capacity or 500 people, whichever is fewer<br>– Outdoor attractions only<br>– In-county visitors only<br>– Reservations or advance tickets required"
  // Overall Status 3 == 3: "Closed"
  // Overall Status 4 == 4: "Closed"
  // Not using anymore: 5: "&lt;a href=”https://covid19.ca.gov/industry-guidance/#theme-parks”&gt;Amusement parks and theme parks&lt;/a&gt;"
  // // RSHO: "Closed"
  

  return `<div class="card-activity">

              <h4>${activityLabel}</h4>

              <p>${
                activityLabel === "Schools"
                  ? buildSchoolsCanReopen({
                      county: selectedCounty.county,
                      schoolLabels,
                    })
                  : searchResultData["RSHO"]
              }</p>
            </div>`;
};
