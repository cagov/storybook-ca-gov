import { html } from "lit-html";
import "./../src";

/**
 * Primary component
 */
export const WebComponent = ({
  content = "Display"
}) => {
  return html`
    <cagov-web-component-template>
      <div>Component template</div>
    </cagov-web-component-template>
  `;
};
