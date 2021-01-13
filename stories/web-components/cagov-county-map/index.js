import templatize from './template.js';

class CAGovCountyMap extends window.HTMLElement {
    connectedCallback () {
      this.json = JSON.parse(this.dataset.json);
      this.state = {};
      console.log(this.json);
      this.innerHTML = templatize(this.json);
    }
  }
  window.customElements.define('cagov-county-map', CAGovCountyMap);
  