import Awesomplete from "awesomplete-es6";
import template from "./template.js";
import getTranslations from "./get-translations-list.js";
import getScreenResize from "./get-window-size.js";
import "./cagov-reopening.scss";
import {
  inputValueCounty,
  inputValueActivity,
} from "./autocompleteButtonBehavior";
import { getCountyMap, replaceAllInMap } from "./getCountyMap";
import { schoolReopeningStatuses } from "./schoolsStatuses";
import { cardTemplate } from "./cardTemplateSaferEconomy";

/**
 * This component provides a county and activity/business search interface
 * and displays combined datasets for different reopening statuses.
 */
class CAGovReopening extends window.HTMLElement {
  constructor() {
    super();
    this.initialLoad = 0;
    // Optional state object to use for persisting data across interactions.
    this.state = {
      county:
        document.querySelector("#location-query") !== null
          ? document.querySelector("#location-query").value
          : null,
      activity:
        document.querySelector("#activity-query") !== null
          ? document.querySelector("#activity-query").value
          : null,
    };
    console.log("STATE", this.state);
    // Establish chart variables and settings.
    this.displayOptions = {
      screens: {
        desktop: {
          width: 600,
          height: 400,
        },
        tablet: {
          width: 600,
          height: 1200,
        },
        mobile: {
          width: 400,
          height: 800,
        },
        retina: {
          width: 600,
          height: 400,
        },
      },
    };

    this.getCountyMap = getCountyMap;
  }

  connectedCallback() {
    window.addEventListener("resize", (e) => {
      // console.log("resize");
      this.handleResize(e);
    });

    // Get translations from web component markup.
    this.translationsStrings = getTranslations(this);
    // Render the chart for the first time.

    this.state = {
      county:
        document.querySelector("#location-query") !== null
          ? document.querySelector("#location-query").value
          : null,
      activity:
        document.querySelector("#activity-query") !== null
          ? document.querySelector("#activity-query").value
          : null,
    };

    // Read content of stringified data-json that is inserted into the enclosing tag of the web-component.
    this.localData = JSON.parse(this.dataset.json);
    // console.log("data", this.localData);

    // Replace the enclosing tag element with contents of template.
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.localData,
    });

    this.render();
    this.setupInputButtons();
  }

  /**
   * Remove any window events on removing this component.
   */
  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize(e) {
    // console.log("resize");
    getScreenResize(this);
    this.updateScreenOptions(e);
  }

  updateScreenOptions(e) {
    this.screenDisplayType = window.componentDisplay
      ? window.componentDisplay.displayType
      : "desktop";
    this.chartBreakpointValues = this.displayOptions.screens[
      this.screenDisplayType ? this.screenDisplayType : "desktop"
    ];
    // console.log(this.screenDisplayType);
  }

  getLocalData() {
    // Get interface label strings
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.localData,
    });
    // console.log("data", this.localData);

    // @TODO this will come from the html page.. (I think?) I think it's page content that's spliced into the card layout
    let theMatrix = document.querySelector(".the-matrix");
    if (theMatrix) {
      document.querySelector(".matrix-holder").innerHTML = theMatrix.innerHTML;
    }

    // Set up autocomplete data for county search
    this.countyStatuses = this.localData["countystatus"].data;
    let aList = [];
    this.countyStatuses.forEach((c) => {
      aList.push(c.county);
    });

    // Set up autocomplete data for activity search
    this.allActivities = this.localData["reopening-activities"].data.Table1;
    let bList = [];
    this.allActivities.forEach((item) => {
      bList.push(item["0"]);
    });

    // Connect autocomplete searches to page elements.
    this.setupAutoComplete("#location-query", "county", aList);
    this.setupAutoCompleteActivity("#activity-query", "activity", bList);

    // Assign data to local variables.
    console.log("localData", this.localData);
    this.countyRegions = this.localData.countyregions.data;
    this.regionsclosed = this.localData.regionsclosed.data;
    this.statusdesc = this.localData.statusdescriptors.data;
    this.schoolsCanReopenList = this.localData["schools-may-reopen"].data;

    // reopening-activities
    // 0: "Amusement parks"
    // 1: "Larger parks open with modifications<br>– 25% capacity<br>– Reservations or advanced tickets required"
    // 2: "Smaller parks open with modifications<br>– 25% capacity or 500 people, whichever is fewer<br>– Outdoor attractions only<br>– In-county visitors only<br>– Reservations or advance tickets required"
    // 3: "Closed"
    // 4: "Closed"
    // 5: "&lt;a href=”https://covid19.ca.gov/industry-guidance/#theme-parks”&gt;Amusement parks and theme parks&lt;/a&gt;"
    // 6: "Closed"

    // @TODO see if we can keep these here or if need to come after localData
  }

  render() {
    // console.log("innerHTML", this.translationsStrings);
    this.getLocalData();

    // Can these come here or synced after getLocalData
    this.getCountyMap(); // Tableau map would go here (currently disabled for development efficiency)
    this.activateForms();
  }

  setupInputButtons() {
    console.log("setup input buttons");

    // Get the input element.
    var countyInput = document.getElementById("location-query");
    var activityInput = document.getElementById("activity-query");

    if (countyInput) {
      // Show clear button only on input or blur (County)
      countyInput.addEventListener("input", function (e) {
        console.log("input county input");
        inputValueCounty(e);
      });

      countyInput.addEventListener("blur", function (e) {
        console.log("blurred county input");
        inputValueCounty(e);
      });
    }

    if (activityInput) {
      // Show clear button only on input or blur (Activity)
      activityInput.addEventListener("input", function (e) {
        console.log("input activity input");
        inputValueActivity(e);
      });

      activityInput.addEventListener("blur", function (e) {
        console.log("input activity blur");
        inputValueActivity(e);
      });
    }

    console.log("countyInput.value", countyInput.value);
    // If values preset, run the search.
    if (
      this.initialLoad === 0 &&
      countyInput.value !== "" &&
      activityInput.value === ""
    ) {
      console.log("has county data");
      this.changeLocationInput(countyInput.value);
      this.initialLoad = 1;
      this.layoutCards();
      document.getElementById("location-query").blur();
    } else if (
      this.initialLoad === 0 &&
      activityInput.value !== "" &&
      countyInput.value === ""
    ) {
      this.changeActivityInput(activityInput.value);
      this.initialLoad = 1;
      this.layoutCards();
      document.getElementById("activity-query").blur();
    } else if (
      this.initialLoad === 0 &&
      activityInput.value !== "" &&
      countyInput.value !== ""
    ) {
      this.changeLocationInput(countyInput.value);
      this.changeActivityInput(activityInput.value);
      this.initialLoad = 1;
      this.layoutCards();
      document.getElementById("location-query").blur();
      document.getElementById("activity-query").blur();
    }

    console.log("activityInput", activityInput);
    console.log("countyInput", countyInput);

    if (countyInput || activityInput) {
      // Clear button in put on click events
      document
        .getElementById("clearLocation")
        .addEventListener("click", function (e) {
          countyInput.value = "";
          inputValueCounty(e);
        });

      document
        .getElementById("clearActivity")
        .addEventListener("click", function (e) {
          activityInput.value = "";
          inputValueActivity(e);
        });
    }
  }

  changeLocationInput(value) {
    const $locationQuery = document.getElementById("location-query");
    $locationQuery.value = value;
    $locationQuery.setAttribute("aria-invalid", false);
    this.state["county"] = value;
    if (value) {
      document.getElementById("clearLocation").classList.remove("d-none");
    } else {
      document.getElementById("clearLocation").classList.add("d-none");
    }
    document.getElementById("location-error").style.visibility = "hidden";
    document.getElementById("reopening-error").style.visibility = "hidden";
    if (this.state.county.length === 0 && this.state.activity.length === 0) {
      this.querySelector(".card-holder").innerHTML = "";
    } else {
      this.layoutCards();
    }
  }

  changeActivityInput(value) {
    const $activityQuery = document.getElementById("activity-query");
    $activityQuery.value = value;
    $activityQuery.setAttribute("aria-invalid", false);
    this.state["activity"] = value;
    if (value) {
      document.getElementById("clearActivity").classList.remove("d-none");
    } else {
      document.getElementById("clearActivity").classList.add("d-none");
    }
    document.getElementById("activity-error").style.visibility = "hidden";
    document.getElementById("reopening-error").style.visibility = "hidden";
    if (this.state.county.length === 0 && this.state.activity.length === 0) {
      this.querySelector(".card-holder").innerHTML = "";
    } else {
      this.layoutCards();
    }
  }

  activateForms() {
    // console.log("Activate Forms");
    document.getElementById("location-query").addEventListener(
      "input",
      function (event) {
        this.changeLocationInput(event.target.value);
      }.bind(this)
    );

    document.getElementById("clearLocation").addEventListener(
      "click",
      function () {
        this.changeLocationInput("");
      }.bind(this)
    );

    document.getElementById("activity-query").addEventListener(
      "input",
      function (event) {
        this.changeActivityInput(event.target.value);
      }.bind(this)
    );

    document.getElementById("clearActivity").addEventListener(
      "click",
      function () {
        this.changeActivityInput("");
      }.bind(this)
    );

    // Form submit behavior for reopening-activities form.
    document.querySelector(".reopening-activities").addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        // Validation:
        // If inputs are empty, Reset county value to null, it's not an error.
        if (document.querySelector("#location-query").value == "") {
          this.state["county"] = null;
        }
        // If inputs are empty, Reset activity value to null, it's not an error.
        if (document.querySelector("#activity-query").value == "") {
          this.state["activity"] = null;
        }
        // ?? Not sure what this was supposed to do
        // Best guess: Show errors
        // @TODO This looks buggy
        // If activity and county are not set (undefined), clear the card holder (what's the card holder?)
        // And make reopening error visible

        if (!this.state["activity"] && !this.state["county"]) {
          this.querySelector(".card-holder").innerHTML = "";
          document.getElementById("reopening-error").style.visibility =
            "visible";
        } else {
          // Render the card layouts
          console.log("laying out cards");
          this.layoutCards();
        }
      }.bind(this)
    );
  }

  // County Autocomplete
  setupAutoComplete(fieldSelector, fieldName, aList) {
    let component = this;
    const awesompleteSettings = {
      autoFirst: true,
      minChars: 0,
      maxItems: 99,
      filter: function (text, input) {
        return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
      },
      item: function (text, input) {
        return Awesomplete.ITEM(text, input.match(/[^,]*$/)[0]);
      },
      replace: function (text) {
        let before = this.input.value.match(/^.+,\s*|/)[0];
        // @TODO clean up abbreviations
        let autocompleteValue = before + text;
        this.input.value = autocompleteValue;
        component.state[fieldName] = autocompleteValue;
        component.layoutCards();
        document.querySelector(fieldSelector).blur();
      },
      list: aList,
    };

    window.makeAutocomplete = new Awesomplete(
      fieldSelector,
      awesompleteSettings
    );
  }

  // Activity Autocomplete
  setupAutoCompleteActivity(fieldSelector, fieldName, bList) {
    let component = this;
    const awesompleteSettings = {
      autoFirst: true,
      minChars: 0,
      maxItems: 99,
      sort: function (a, b) {
        if (a["0"] < b["0"]) {
          return -1;
        }
        if (a["0"] > b["0"]) {
          return 1;
        }
        return 0;
      },
      replace: function (text) {
        let before = this.input.value.match(/^.+,\s*|/)[0];
        // @TODO clean up abbreviations
        let autocompleteValue = before + text;
        this.input.value = autocompleteValue;
        component.state[fieldName] = autocompleteValue;
        component.layoutCards();
        document.querySelector(fieldSelector).blur();
      },
      list: bList,
    };

    window.makeAutocomplete2 = new Awesomplete(
      fieldSelector,
      awesompleteSettings
    );

    document
      .querySelector(fieldSelector)
      .addEventListener("focus", function () {
        this.value = "";
        window.makeAutocomplete2.evaluate();
      });
  }

  layoutCards() {
    this.replaceAllInMap = replaceAllInMap; // Q: What was this? for tableau map?
    this.cardHTML = "";

    // Build data for cards.
    let selectedCounties = this.countyStatuses;
    // Q: How many statuses are supported? Had there been a plan to show multiple counties?
    if (this.state["county"]) {
      selectedCounties = [];
      this.countyStatuses.forEach((item) => {
        if (item.county == this.state["county"]) {
          selectedCounties.push(item);
        }
      });
    }

    this.cardHTML = cardTemplate({
      selectedCounties, // array of objects
      selectedActivities: this.allActivities, // array
      schoolsCanReopenList: this.schoolsCanReopenList, // array?
      schoolLabels: this.schoolsText, // ? 
      schoolReopeningStatuses, // function
      countyRegions: this.countyRegions,
      statusdesc: this.statusdesc,
      regionLabel: this.translationsStrings.regionLabel,
      regionsclosed: this.regionsclosed,
      activity: this.state["activity"],
      allActivities: this.allActivities,
    });

    // These classes are used but created with variables so the purge cannot find them, they are carefully placed here where they will be noticed

    // Add card markup to card holder.
    this.querySelector(
      ".card-holder"
    ).innerHTML = `<div class="card-content">${this.cardHTML}</div>`;

    this.querySelector(".card-holder").classList.remove("inactive");

    // For Analytics: Dispatch custom event so we can pick up and track this usage elsewhere.
    const event = new window.CustomEvent("safer-economy-page-submission", {
      detail: {
        county: this.state.county,
        activity: this.state.activity,
      },
    });

    window.dispatchEvent(event);
  }
}

window.customElements.define("cagov-reopening", CAGovReopening);