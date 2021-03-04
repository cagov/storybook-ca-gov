import { html } from 'lit-html';
import '@cagov/arrow';

/**
 * Primary UI component for user interaction
 */
export const ArrowLink = ({ primary, backgroundColor, foregroundColor, size, label }) => {

  return html`
    <div class="row py-5 text-center">
      <div class="col-md-3 bg-${backgroundColor} py-4">
        <a href="#" class="link-arrow-${foregroundColor}">
          <div class="link-arrow-label">${label}</div>
          <cagov-arrow></cagov-arrow>
        </a>
      </div>
    </div>
  `;
};
