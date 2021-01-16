import { html } from 'lit-html';
import './cagov-reopening.css';
import CAGovReopening from './index';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({ data }) => {
  console.log("web component data", data.pubData.records);
  return html`
    <cagov-reopening 
      data-json=${JSON.stringify(data.pubData.records)}
    >
      <ul>
        <li data-label="title">Find the status for activities in your county</li>
        <li data-label="activityLabel">Activity</li>
        <li data-label="activityPlaceholder">Enter a business or activity</li>
        <li data-label="countyLabel">County</li>
        <li data-label="countyPlaceholder">Enter county</li>
        <li data-label="buttonText">Get latest risk levels</li>
        <li data-label="clearText">Clear</li>
        <li data-label="seeGuidanceText">See guidance for</li>
        <li data-label="countyRestrictionsAdvice">Counties can restrict further. Check your</li>
        <li data-label="countyRestrictionsCountyWebsite">county’s website</li>
        <li data-label="understandTheData">Understand the data.</li>
        <li data-label="regionLabel">Region:</li>
      </ul>
    </cagov-reopening>  
  `;
};