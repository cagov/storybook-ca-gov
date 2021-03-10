import { html } from 'lit-html';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, foregroundColor, size, label }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return html`
  <div class="row py-5 text-center">
    <div class="col-md-3 bg-${backgroundColor} py-4">
      <a href="#" class="button-${foregroundColor}">${label}</a>
    </div>
  </div>
  `;
};
