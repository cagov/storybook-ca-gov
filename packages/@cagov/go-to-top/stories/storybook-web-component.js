import { html, nothing } from "lit-html";
import "./../src";

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({
}) => {
  return html`<div>
      <cagov-go-to-top />
      <div id="main" class="content" style="height:3000px;background-color:gray">
        Lipsum...
      </div>
    </div>
  `;
};
