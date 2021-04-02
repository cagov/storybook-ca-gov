import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, foregroundColor, size, label, direction }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return html`
  <div class="row py-5 text-center">
    <div class="col-md-3 bg-${backgroundColor} py-4">
      <a href="#" class="button-${foregroundColor}"><span class="ca-gov-icon-${direction}" aria-hidden="true"></span> ${label}</a>
    </div>
  </div>
  `;
};
