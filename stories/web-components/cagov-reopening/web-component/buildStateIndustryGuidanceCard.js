export const buildStateIndustryGuidanceCard = ({
  activityLabel,
  county,
  stateIndustryGuidanceData,
  searchResultData,
  seeStateIndustryGuidanceLabel = "See state industry guidance", // @TODO add as data label
  guidanceTemplate = `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="activityLabel"></span>`,

  industryGuidancePdfLabel = `Industry guidance for <span data-attribute="activityLabel"></span>`,
  checklistPdfLabel = `Checklist for <span data-attribute="activityLabel"></span>`,
  additionalGuidanceLabel = "Depending on your business operations, other guidance may apply",
  resultType = "default",
}) => {
  // @TODO Add accordion syntax
  // @TODO Add dropdown interactive list box
  // Check external link

  let moreLanguages = `
    <ul class="dropdown-menu-inline">
      <li><a href="http://files">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
    </ul>
    `;

  try {
    if (resultType === "default") {

      let accordionContent = getDefaultAccordionContent({
        stateIndustryGuidanceData,
        activityLabel,
        searchResultData,
      });
      return `<div class="state-guidance">
              <cagov-accordion>
                <div class="card">
                  <button class="card-header accordion-alpha" type="button" aria-expanded="false">
                    <div class="accordion-title">
              ${seeStateIndustryGuidanceLabel}
                    </div><div class="plus-munus"><cagov-plus></cagov-plus><cagov-minus></cagov-minus></div>
                  </button>
                  <div class="card-container" aria-hidden="true">
                    <div class="card-body">
              ${accordionContent}
                    </div>
                  </div>
                </div>
              </cagov-accordion>
              



                ${additionalGuidanceLabel}
            </div>`;
    } else if (resultType === "simple") {
      // Example: for industry guidance display
      return `<div class="state-guidance">

            ${additionalGuidanceLabel}

        </div>`;
    }
  } catch (error) {
    console.error("Error rendering buildStateIndustryGuidanceCard", error);
  }

  return ``;
};


const getDefaultAccordionContent = ({
  stateIndustryGuidanceData,
  activityLabel,
  searchResultData
}) => {
  // console.log("default accordion", activityLabel);
  // console.log("stateIndustryGuidanceData", stateIndustryGuidanceData);
  // console.log("searchResultData",  searchResultData);

  return "";
};