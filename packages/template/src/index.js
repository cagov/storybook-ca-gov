/**
 * @element cagov-web-component-template
 */
export class CaGovComponent extends window.HTMLElement {
  constructor() {
    super();

    // Optional state object to use for persisting data across interactions.
    this.state = {};
  }

  connectedCallback() {
    // Replace the enclosing tag element content.
    this.innerHTML = `<div>
      <p>Web component</p> 
    </div>`;
  }
}

window.customElements.define("cagov-web-component-template", CaGovComponent);
