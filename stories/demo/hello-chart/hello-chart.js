import { html } from 'lit-html';
import './hello-chart.css';


/**
 * Simple d3 chart
 */
export const Chart = ({ label, onClick }) => {
  return html`
    <div
      @click=${onClick}
    >
      ${label}
    </div>
  `;
};
