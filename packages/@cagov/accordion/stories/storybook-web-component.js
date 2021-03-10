import { html } from "lit-html";

import "./../src/index";
// import "@cagov/accordion";

/**
 * Primary UI component for user interaction
 */
export const WebComponent = ({
  expanded = false,
  accordionLabel = "Accordion label",
  accordionContent = "Accordion content",
}) => {
  return html`
    <cagov-accordion>
      <div class="card">
        <button
          class="card-header accordion-alpha"
          type="button"
          aria-expanded="${expanded}"
        >
          <div class="accordion-title">
            <h4>${accordionLabel}</h4>
          </div>
          <div class="plus-munus">
            <cagov-plus></cagov-plus><cagov-minus></cagov-minus>
          </div>
        </button>
        <div class="card-container" aria-hidden="${!expanded}" style="height: 0px;">
          <div class="card-body">
            ${accordionContent}
          </div>
        </div>
      </div>
    </cagov-accordion>
  `;
};
