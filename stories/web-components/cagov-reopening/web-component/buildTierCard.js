/**
 * Generate tier status display component.
 *
 * @param {object} param - Data object passed to build tier display card.
 * @param {array} param.tierStatusDescriptors - Status descriptions and labels. 
    "County tier": "Minimal",
    "colorLabel": "Yellow",
    "_Color label": "Yellow",
    "New cases": "Less than 1.0",
    "Positive tests": "Less than 2.0%",
    "description": "Most indoor business operations are open with modifications",
    "Positive-heq": "Less than 2.2%"
 * 
 * @param {object} param.selectedCounty - Data about currently selected county (@TODO look up props) - comes from countyRegions (or status?) table data - we need a pattern to reference table data in WP from here e.g.  ?? no "Contra Costa": "Bay Area",
 * @param {array} param.countyRegions - Dataset (@TODO of what)
 * @param {array} param.regionLabel - Text label (@TODO for what?)
 * @param {array} param.regionsclosed - Data set of closed RSHO* (@TODO Confirm) regions
 * @param {string} param.countyRestrictionsCountyWebsiteLabel - Text label
 * @param {string} param.stayAtHomeOrder - Text label
 * @param {string} param.understandTheData - Text label
 * @param {string} param.understandTheDataLink - Url
 * @param {string} param.countyRestrictionsAdvice - Text label
 * @param {array} param.countyWebpages - Dataset of COVID-19 county webpages
 * // @TODO show example of nested expected value for input (or move up a level & document it another way)
 * @param {string} param.county - Definition
 * @return {string} HTML markup rendering What's Open tier status card.
 *
 * https://jsdoc.app/tags-param.html#parameters-with-properties
 */
export const buildTierCard = ({
  tierStatusDescriptors = null,
  selectedCounty = null,
  countyRegions = null,
  regionLabel = null,
  regionsclosed = null,
  stayAtHomeOrder = null,
  understandTheData = null,
  understandTheDataLink = "#county-status",
  countyRestrictionsAdvice = null,
  county = null,
  countyWebsiteLink = null,
}) => {
  let countyTier = null;
  let countyTierDescription = null;
  let tierStatus = null;

  // console.log("tier card selectedCounty", selectedCounty.county, selectedCounty);

  try {
    // @TODO the colors are flipped, we will try to flip them back this time to match what's in Snowflake
    if (
      selectedCounty !== undefined &&
      selectedCounty !== null &&
      selectedCounty.county !== undefined &&
      selectedCounty.county !== null &&
      selectedCounty.county.length > 0
    ) {

      // @TODO the status descriptors are probably flipped

      countyTier =
        tierStatusDescriptors[parseInt(selectedCounty["Overall Status"]) - 1][
          "County tier"
        ];
      countyTierDescription =
        tierStatusDescriptors[parseInt(selectedCounty["Overall Status"]) - 1]
          .description;

      tierStatus = selectedCounty["Overall Status"];

      return `<div class="card-county">
          County result
          ${
            selectedCounty !== undefined &&
            selectedCounty !== null &&
            selectedCounty.county !== undefined
              ? `<h2>${selectedCounty.county}</h2>`
              : ""
          }
        
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
            regionsclosed.filter(
              (r) => r.region === countyRegions[selectedCounty.county]
            ).length > 0
              ? stayAtHomeOrder
              : ""
          }

          ${
            tierStatus !== null
              ? `<div class="county-color-${tierStatus}">
            <div class="pill">${countyTier}</div>
            
            <p>${countyTierDescription}. 
                <a href="${understandTheDataLink}">${understandTheData}</a>
            </p>
          </div>`
              : null
          }
          
          <p>
              ${countyRestrictionsAdvice} 
              ${countyWebsiteLink}
          </p>
      </div>`;
    } else {
      // No Tier Status
      return `<div class="card-county">
        No Selected County
      </div>`;
    }
  } catch (error) {
    console.error("Error rendering tier card", error);
  }
  return ``;
};
