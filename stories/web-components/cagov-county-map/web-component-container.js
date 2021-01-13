import { html } from 'lit-html';
import './cagov-county-map.css';
import CAGovCountyMap from './index';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({ data = null }) => {
  // console.log("web component data", data);
  return html`
    <cagov-county-map
      data-json="${JSON.stringify(data.data)}"
    >
      <ul>
        <li data-label="title">County Map Title</li>
      </ul>
    </cagov-county-map>
  `;
};
