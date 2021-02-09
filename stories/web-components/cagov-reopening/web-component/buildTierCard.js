/**
 * Generate tier status display component.
 *
 * @param {object} param - Data object passed to build tier display card.
 * @param {array} param.statusdesc - @TODO ? also relabel this
 * @param {object} param.selectedCounty - Data about currently selected county (@TODO look up props) - comes from table data - we need a pattern to reference table data in WP from here
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
  statusdesc = null,
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

  try {
    // @TODO the colors are flipped, we will try to flip them back.
    countyTier =
      statusdesc[parseInt(selectedCounty["Overall Status"]) - 1][
        "County tier"
      ];
    countyTierDescription =
      statusdesc[parseInt(selectedCounty["Overall Status"]) - 1]
        .description;
    tierStatus = selectedCounty["Overall Status"];
  } catch (error) {
    console.error("Error rendering tier card", error);
  }

  return `<div class="card-county">
  
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
            regionsclosed.filter(
              (r) => r.region === countyRegions[selectedCounty.county]
            ).length > 0
              ? stayAtHomeOrder
              : ""
          }
          <div class="county-color-${tierStatus}">
            <div class="pill">${countyTier}</div>
            
            <p>${countyTierDescription}. 
                <a href="${understandTheDataLink}">${understandTheData}</a>
            </p>
          </div>
          
          <p>
              ${countyRestrictionsAdvice} 
              ${countyWebsiteLink}
          </p>
      </div>`;
};
