import template from "./template.js";
import drawCountyMap from "./drawCountyMap.js";
import getTranslations from "./get-strings-list.js";
import getScreenResizeCharts from "./get-window-size.js"; // Let's make an example with 3 entirely different d3 layouts for mobile, tablet & desktop
// import rtlOverride from "./rtl-override.js"; // Let's have an example with Arabic & Chinese for the bar charts.
// import { reformatReadableDate } from "./readable-date.js";

// @TODO Handle situations of needing to re-render chart on re-size. This is our chance to encapsulate the code enough so it can re-render easily.

class CAGovCountyMap extends window.HTMLElement {
  /**
   * This runs when the web component is first loaded.
   */
  connectedCallback() {
    // Read translation strings that come from HTML markup that is pasted into a web page.
    this.translationsStrings = getTranslations(this);
    // console.log("translation strings", this.translationsStrings);

    // Read content of stringified data-json that is inserted into the enclosing tag of the web-component.
    this.json = JSON.parse(this.dataset.json);
    console.log("dataset json", this.json);

    // State object to use for persisting data across interactions.
    this.state = {};

    // Replace the enclosing tag element with contents of template.
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.json,
    });

    // Establish chart variables and settings.
    this.chartOptions = {
      screens: {
        desktop: {
          width: 600,
          height: 400,
        },
        tablet: {
          width: 600,
          height: 400,
        },
        mobile: {
          width: 600,
          height: 400,
        },
        retina: {
          width: 600,
          height: 400,
        },
      },
    };

    // Listen for responsive resize event and get the settings for the responsive chart sizes.
    getScreenResizeCharts(this);
    this.screenDisplayType = window.charts
      ? window.charts.displayType
      : "desktop";
    this.chartBreakpointValues = this.chartOptions[
      this.screenDisplayType ? this.screenDisplayType : "desktop"
    ];

    // Choose settings for current screen display.
    // Display content & layout dimensions.
    const handleChartResize = () => {
      getScreenResizeCharts(this);
      this.screenDisplayType = window.charts
        ? window.charts.displayType
        : "desktop";
      this.chartBreakpointValues = this.chartOptions.screens[
        this.screenDisplayType ? this.screenDisplayType : "desktop"
      ];
    };
    window.addEventListener("resize", handleChartResize);

    // Generate the map.
    this.svg = drawCountyMap({
      translations: this.translationsStrings,
      data: this.localData,
      domElement: ".chart-container",
      chartOptions: this.chartOptions,
      chartBreakpointValues: this.chartBreakpointValues,
      screenDisplayType: this.screenDisplayType,
    });

    // d-none equivalent
    // rtlOverride(this); // quick fix for arabic
  }

  render() {
    // When re-render is triggered, re-render chart.(@TODO confirm exactly when this happens)
    getScreenResizeCharts(this);
    this.screenDisplayType = window.charts
      ? window.charts.displayType
      : "desktop";
    this.chartBreakpointValues = this.chartOptions.screens[
      this.screenDisplayType ? this.screenDisplayType : "desktop"
    ];

    // Generate the map.
    this.svg = drawCountyMap({
      translations: this.translationsStrings,
      data: this.localData,
      domElement: ".chart-container svg",
      chartOptions: this.chartOptions,
      chartBreakpointValues: this.chartBreakpointValues,
      screenDisplayType: this.screenDisplayType,
    });
  }
}
window.customElements.define("cagov-county-map", CAGovCountyMap);
