/**
 * @element cagov-component-template
 */
export class CaGovComponent extends window.HTMLElement {
  constructor() {
    super();

    // Optional state object to use for persisting data across interactions.
    this.state = {};
  }

  connectedCallback() {
    this.render();
  }

  /**
   * Remove any window events on removing this component.
   */
  disconnectedCallback() {}

  render() {

  }
}
