import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Toggles = ({ primary, topsize, itemsize }) => {

  return html`
    <div class="d-flex justify-content-center">
      <div class="text-center ${topsize}">
        <button class="${itemsize} active">Tab 1</button>
        <button class="${itemsize}">Tab 1</button>
        <button class="${itemsize}">Tab 1</button>
      </div>
    </div>
  `;
};
