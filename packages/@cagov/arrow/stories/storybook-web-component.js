import { html } from "lit-html";

// import '@cagov/arrow';
import "./../cwds-arrow"; // will be same as result from @cagov/arror

import "./../src/arrow-icon"; // cagov-arrow
import "./../src/plus-icon"; // cagov-plus
import "./../src/minus-icon"; // cagov-minus

/**
 * Primary UI component for user interaction
 * Requires Bootstrap 4
 * @param  {string} param.backgroundColor - css color name
 * @param  {string} param.foregroundColor - css color name
 * @param  {string} param.label - display label
 * @param  {string} param.size - "small", "large"
 * @param  {boolean} param.primary - If is primary or not
 */
export const ArrowLink = ({
  primary = false,
  backgroundColor = "blue",
  foregroundColor = "white",
  size = "",
  label,
}) => {
  return html`
    <div class="row py-5 text-center">
      <div class="col-md-3 bg-${backgroundColor} py-4 ${size}">
        <a href="#" class="link-arrow-${foregroundColor}">
          <div class="link-arrow-label">${label}</div>
          <cagov-arrow></cagov-arrow>
        </a>
      </div>
    </div>
  `;
};
