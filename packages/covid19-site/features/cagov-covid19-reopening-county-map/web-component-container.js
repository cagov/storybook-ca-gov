import { html } from 'lit-html';
import './cagov-county-map.css';
import './index.js';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = (args) => {
  // console.log("Data passed into web component", args);
  let localData = JSON.stringify(args);
  return html`
    <cagov-covid19-reopening-county-map id="cagov-county-map" data-json="${localData}">
      <ul>
          <li data-label="title">${args.title}</li>
      </ul>
    </cagov-covid19-reopening-county-map>
  `;
}



