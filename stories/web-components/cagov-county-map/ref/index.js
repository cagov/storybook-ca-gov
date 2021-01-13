import templatize from "./template.js";

/**
 * Display a d3 map with highlighted county data
 */
class CAGovCountyMap extends window.HTMLElement {
  connectedCallback() {
    this.json = JSON.parse(this.dataset.json);
    this.state = {};
    this.innerHTML = templatize(this.json);
  }
}

window.customElements.define("cagov-county-map", CAGovCountyMap);
