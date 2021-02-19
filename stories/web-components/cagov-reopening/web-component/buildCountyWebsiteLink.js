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
  let link = `<p>
      <a href="${url}">${replaceMarkupAttributeContent({
    markup: countyRestrictionsCountyWebsiteLabel,
    selector: "[data-attribute=county]",
    content: county,
  })}</a>.
  </p>`;
  // @TODO Insert county name into county link. data-attribute="county"
  return link;
};

var domParserSupported = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch(err) {
		return false;
	}
	return true;
})();

/**
 * For markup content with a child element, use selector to find element and replace content of child element with content.
 * @param {string} param.markup - Markup content to look for child element.
 * @param {string} param.selector - Child element query selector value to look up.
 * @param {string} param.content - Replacement content to insert into the child element.
 * @return {string} - Markup content with string replaced
 */
const replaceMarkupAttributeContent = ({
  markup = null,
  selector = null,
  content = "",
}) => {
  // Convert markup to queryable element.
  let response = markup;
  try {
    if (domParserSupported && 
      markup !== undefined &&
      markup !== null && 
      selector !== undefined &&
      selector !== null &&
      content !== undefined
      ) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(markup, "text/html");
      let body = doc.body;
      let childElement = body.querySelector(selector);
      childElement.innerHTML = content !== null ? content : "";
      response = body.outerHTML;
    } else {
      var body = document.createElement(markup);
      let childElement = body.querySelector(selector);
      childElement.innerHTML = content !== null ? content : "";
      response = body.outerHTML;
    }
    console.log("response", response);
  } catch (error) {
    console.error("Could not replaceMarkupAttributeContent", error);
  }

  // Replace content with selector.
  // Convert back to string
  // Return markup string
  return response;
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
