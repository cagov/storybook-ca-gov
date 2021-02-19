export const buildStateIndustryGuidanceCard = ({
  activityLabel,
  county,
  stateIndustryGuidanceData,
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
    <ul class="dropdown-menu">
      <li><a href="http://files">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
      <li><a href="#">Language</a></li>
    </ul>
    `;

  try {
    if (resultType === "default") {
      return `<div class="state-guidance">
                ${additionalGuidanceLabel}
                ${moreLanguages}
            </div>`;
    } else if (resultType === "simple") {
      // Example: for industry guidance display
      return `<div class="state-guidance">
            ${additionalGuidanceLabel}
            ${moreLanguages}
        </div>`;
    }
  } catch (error) {
    console.error("Error rendering buildStateIndustryGuidanceCard", error);
  }

  return ``;
};
