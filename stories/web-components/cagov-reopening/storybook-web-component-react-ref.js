import React, { useRef } from 'react'
import { html } from "lit-html";
import CAGovReopening from "./web-component";

// In case it turns out we still need this code example for more advanced rendering
// This version of the web component embeds the component as React & adds a reference to it.

/**
 * Primary UI component for user interaction
 */
export const WebComponent = (args) => {
  const webcomponentElement = useRef(null)
  console.log("web component data", args);
  return html`
    <cagov-reopening data-json=${JSON.stringify(args.data)} ref={webcomponentElement}>
      <ul>
        <li data-label="title">
          Find the status for activities in your county
        </li>
        <li data-label="activityLabel">Activity</li>
        <li data-label="activityPlaceholder">Enter a business or activity</li>
        <li data-label="countyLabel">County</li>
        <li data-label="countyPlaceholder">Enter county</li>
        <li data-label="buttonText">Get latest risk levels</li>
        <li data-label="clearText">Clear</li>
        <li data-label="seeGuidanceText">See guidance for</li>
        <li data-label="countyRestrictionsAdvice">
          Counties can restrict further. Check your
        </li>
        <li data-label="countyRestrictionsCountyWebsite">county’s website</li>
        <li data-label="understandTheData">Understand the data.</li>
        <li data-label="regionLabel">Region:</li>
      </ul>
    </cagov-reopening>
  `;
};

export default WebComponent;