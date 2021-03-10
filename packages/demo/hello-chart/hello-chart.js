import { html } from 'lit-html';
import './hello-chart.css';
import drawChart from "./drawChart.js";

/**
 * Simple d3 chart
 */
export const Chart = ({ label }) => {
  window.addEventListener('DOMContentLoaded', (event) => {
      // console.log('DOM fully loaded and parsed');
      var loadChart = drawChart({
        domElement: '.chart-container',
        data: [
          1, 2, 3, 4, 5
        ]
      });
  });
    
  return html` 
    <div>
      ${label}
      <div class="chart-container"></div>
    </div>
  `;
};
