import { html } from 'lit-html';
import './cagov-county-map.css';
import './index.js';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({ data }) => {
  return html`
  <cagov-county-map
  data-json="${JSON.stringify(data)}"
  >
    <ul>
        <li data-label="title">Title</li>
        <li data-label="description">Description</li>
    </ul>
  </cagov-county-map>
  `;
};

