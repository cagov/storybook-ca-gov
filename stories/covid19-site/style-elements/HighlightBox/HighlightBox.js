import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const HighlightBox = ({ primary, classname }) => {

  return html`
  <div class="${ classname } mt-5">
    <h3 class="color-primary mt-0">Due to Election Day, the Tuesday, November 3 Blueprint tier assignment has been moved to Wednesday, November 4.
    </h3>
    <p>The data used for this week’s tier assignments is from the usual 7-day time period.</p>
  </div>
  `;
};
