import { html } from 'lit-html';
import './cagov-reopening.css';
import CAGovReopening from './index';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({ data }) => {
  return html`
    <cagov-reopening 
      data-json="{{data}}">
    </cagov-reopening>  
  `;
};
