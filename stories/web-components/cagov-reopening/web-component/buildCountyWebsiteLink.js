/**
 * Generate tier status display component.
 * // @TODO check these data types, they might be wrong.
 * @param {object} param
 * @param {string} param.countyRestrictionsCountyWebsiteLabel - Label for county website link
 * @param {array} param.countyWebpages - Data set of COVID-19 County Webpages from ...
 * @param {string} param.county - Currently selected county.
 * @return {string} HTML markup rendering link to COVID-19 County website
 */
export const buildCountyWebsiteLink = ({
  countyRestrictionsCountyWebsiteLabel = null,
  countyWebpages = null,
  county = null,
  defaultUrl = "../get-local-information",
}) => {
  // @TODO get new county website (look up by county)
  // Get the URL
  // Document where the data comes from
  let url = defaultUrl;
  if (county !== null && countyWebpages !== null) {
    url = lookupCountyWebsite({ county, countyWebpages });
  }
  // @TODO Add external link class handling.
  return `<p>
      <a href="${url}">${countyRestrictionsCountyWebsiteLabel}</a>.
  </p>`;
};

/**
 * Get the URL to the current county webpage
 * @param {array} param.countyWebpages - Data set of COVID-19 County Webpages from ...
 * @param {string} param.county - Currently selected county.
 * 
 * @TODO make this return an error if the data source format changes.
 * @TODO add a test with mock data samples
 * @return {string} Url of the currently selected county webpage.
 */
const lookupCountyWebsite = ({ county = null, countyWebpages = null }) => {
  let result = null;
  if (countyWebpages !== null && county !== null) {
    let countyWebpage = countyWebpages.filter((page) => {
      return page.fields.id === county;
    });
    if (
      countyWebpage !== undefined &&
      countyWebpage.length > 0 &&
      countyWebpage[0].fields !== undefined && 
      countyWebpage[0].fields.county_covid19_website !== undefined
    ) {
      result = countyWebpage[0].fields.county_covid19_website;
    }
  }
  return result;
};
// For @example / test
// [{
//   "id": "rec0729VPjP4XjcoM",
//   "fields": {
//       "id": "Lake",
//       "county_label": "Lake County",
//       "county_covid19_website": "http://health.co.lake.ca.us/Coronavirus/Businesses.htm",
//       "county_department": "Lake County Public Health",
//       "last_modified_time": "2020-12-24T00:17:00.000Z"
//   },
//   "createdTime": "2020-12-18T15:20:26.000Z"
// }],