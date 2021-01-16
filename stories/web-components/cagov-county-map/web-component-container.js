import { html } from 'lit-html';
import './cagov-county-map.css';
import './index.js';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = (args) => {
  console.log("Data passed into web component", args);
  return html`
  <cagov-county-map
  data-json="${JSON.stringify(args)}"
  >
    <ul>
        <li data-label="title">${args.title}</li>
        <li data-label="description">Description</li>
    </ul>
  </cagov-county-map>
  `;
};

