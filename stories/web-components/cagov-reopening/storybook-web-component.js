import { html } from 'lit-html';
import CAGovReopening from './web-component';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = (args) => {
  // console.log("web component data", args);
  return html`
    <cagov-reopening 
      data-json=${JSON.stringify(args.data)}
    >
      <ul>
        <li data-label="presetValueCounty">${args.countyValue}</li>
        <li data-label="presetValueActivity">${args.activityValue}</li>
        <li data-label="title">Find the status for activities in your county</li>
        <li data-label="activityLabel">Activity</li>
        <li data-label="activityPlaceholder">Enter a business or activity</li>
        <li data-label="countyLabel">County</li>
        <li data-label="countyPlaceholder">Enter county</li>
        <li data-label="buttonText">Get latest risk levels</li>
        <li data-label="clearText">Clear</li>
        <li data-label="seeGuidanceText">See guidance for</li>
        <li data-label="countyRestrictionsAdvice">Counties can restrict further.</li>
        <li data-label="countyRestrictionsCountyWebsiteLabel">Check <span data-attribute="county"></span>’s COVID-19 website</li>
        <li data-label="understandTheData">Understand the data.</li>
        <li data-label="understandTheDataLink">#county-status</li>
        <li data-label="regionLabel">Region:</li>
        <li data-label="seeStateIndustryGuidanceLabel">See state industry guidance</li>
        <li data-label="guidanceTemplate"><span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="activityLabel"></span></li>
        <li data-label="industryGuidancePdfLabel">Industry guidance for <span data-attribute="activityLabel"></span></li>
        <li data-label="industryGuidancePdfLabel">Industry guidance for <span data-attribute="activityLabel"></span></li>
        <li data-label="checklistPdfLabel">Checklist for <span data-attribute="activityLabel"></span></li>
        <li data-label="additionalGuidanceLabel">Depending on your business operations, other guidance may apply</span></li>
        <li data-label="emptySearchError">No County or Activity Selected</li>
        <li data-label="enterMoreCharacters">Type 2 or more characters for results.</li>
      </ul>
    </cagov-reopening>
  `;
};