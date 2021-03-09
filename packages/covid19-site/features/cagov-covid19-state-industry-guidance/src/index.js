import getTranslations from "./../../utilities/get-translations-list.js";
import getScreenResize from "./../../utilities/get-window-size.js";
import "./index.scss";
import template from "./template.js";


/**
 * This component provides a county and activity/business search interface
 * and displays combined datasets for different reopening statuses.
 *
 * @example - Code snippet (@TODO put in handbook or somewhere)
 *
 */
 export class CaGovCovid19StateIndustryGuidance extends window.HTMLElement {

  constructor() {
    console.log("CaGovCovid19StateIndustryGuidance Reopening loaded");
    
    super();

    };
  }

  connectedCallback() {
   
    // Read content of stringified data-json that is inserted into the enclosing tag of the web-component.
    this.localData = JSON.parse(this.dataset.json);

    // Replace the enclosing tag element with contents of template.
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.localData,
    });

    this.render();

  }

  /**
   * Remove any window events on removing this component.
   */
  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize);
  }

  getData() {
    // Get interface label strings
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.localData,
    });

    // Set up autocomplete data for county search (list of counties)
    this.countyStatuses = this.localData["countystatus"].data;
    let countyAutocompleteList = [];
    this.countyStatuses.forEach((c) => {
      countyAutocompleteList.push(c.county);
    });
    // console.log("countyAutocompleteList", countyAutocompleteList);
    // Set up autocomplete data for activity search
    this.allActivities = this.localData["activity-business-search-data"].data; // Version 2
    // this.allActivities = this.localData["reopening-activities"].data.Table1; // Version 1

    // 1 - MINIMAL: ""
    // 2 - MODERATE: ""
    // 3 - SUBSTANTIAL: ""
    // 4 - WIDESPREAD: ""
    // RSHO: ""
    // activity_key: "agriculture"
    // activity_reference_key: "agriculture"
    // activity_search_autocomplete: "Agriculture and livestock"
    // last_modified: "2021-01-15T19:44:00.000Z"
    // override_industry_guidance_label: ""
    // primary_guidance: "agriculture"
    // secondary_guidance: ""

    let activityAutocompleteList = [];
    this.allActivities.forEach((item) => {
      activityAutocompleteList.push(item.activity_search_autocomplete);
    });

    // Connect autocomplete searches to page elements.
    this.setupAutoComplete("#location-query", "county", countyAutocompleteList);
    this.setupAutoCompleteActivity(
      "#activity-query",
      "activity",
      activityAutocompleteList
    );

    // Assign data to local variables.
    this.countyRegions = this.localData.countyregions.data;
    this.regionsclosed = this.localData.regionsclosed.data.Table1; // {array}
    this.tierStatusDescriptors = this.localData[
      "tier-status-descriptors"
    ].data.Table1; // was statusdesc
    this.schoolsCanReopenList = this.localData["schools-may-reopen"].data;
    this.schoolsText = this.localData["common-page-labels"].data.Table6[0];
  }

  render() {
    this.getData();

    // Can these come here or synced after getData
    this.getCountyMap(); // Tableau map would go here (currently disabled for development efficiency)
    this.activateForms();
  }

  setupInputButtons() {
    // console.log("setup input buttons");

    // Get the input element.
    var countyInput = document.getElementById("location-query");
    var activityInput = document.getElementById("activity-query");

    let hasCountyInput = this.hasCountyInput();
    let hasActivityInput = this.hasActivityInput();
    // @TODO Add enter form submission for accessibility for all interactions

    if (countyInput) {
      // Show clear button only on input or blur (County)
      countyInput.addEventListener("input", function (e) {
        // console.log("input county input", e);
        inputValueCounty(e, hasCountyInput);
        // this.changeLocationInput(countyInput.value);
      });

      countyInput.addEventListener("blur", function (e) {
        // console.log("blurred county input", e);
        inputValueCounty(e, hasCountyInput);
        // this.changeLocationInput(countyInput.value);
      });
    }

    if (activityInput) {
      // Show clear button only on input or blur (Activity)
      activityInput.addEventListener("input", function (e) {
        // console.log("input activity input", e);
        inputValueActivity(e, hasActivityInput);
        // this.changeActivityInput(activityInput.value);
      });

      activityInput.addEventListener("blur", function (e) {
        // console.log("input activity blur", e);
        inputValueActivity(e, hasActivityInput);
        // this.changeActivityInput(activityInput.value);
      });
    }

    // console.log("hasCountyInput", hasCountyInput, "hasActivityInput", hasActivityInput, this.initialLoad);

    // If values preset, run the search.
    if (
      this.initialLoad === 0 &&
      hasCountyInput === true &&
      hasActivityInput === false
    ) {
      // console.log("Initial load: has county data");
      this.changeLocationInput(countyInput.value);
      this.initialLoad = 1;
      this.layoutCards();
      document.getElementById("location-query").blur();
    } else if (
      this.initialLoad === 0 &&
      hasCountyInput === false &&
      hasActivityInput === true
    ) {
      // console.log("Initial load: has activity data");
      this.changeActivityInput(activityInput.value);
      this.initialLoad = 1;
      this.layoutCards();
      document.getElementById("activity-query").blur();
    } else if (
      this.initialLoad === 0 &&
      hasCountyInput === true &&
      hasActivityInput === true
    ) {
      // console.log("Initial load: has county and activity data");
      this.changeLocationInput(countyInput.value);
      this.changeActivityInput(activityInput.value);
      this.initialLoad = 1;
      this.layoutCards();
      document.getElementById("location-query").blur();
      document.getElementById("activity-query").blur();
    }

    if (hasActivityInput || hasCountyInput) {
      // Clear button input on click events
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
    // console.log("changing location input");
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

    if (this.hasActivityInput() === false && this.hasCountyInput() === false) {
      this.querySelector(".card-holder").innerHTML = "";
    } else {
      this.layoutCards();
    }
  }

  changeActivityInput(value) {
    // console.log("changing activity input");
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

    if (this.hasActivityInput() === false && this.hasCountyInput() === false) {
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

        if (
          this.hasActivityInput() === false &&
          this.hasCountyInput() === false
        ) {
          this.querySelector(".card-holder").innerHTML = "";
          document.getElementById("reopening-error").style.visibility =
            "visible";
        } else {
          // Render the card layouts

          this.layoutCards();
        }
      }.bind(this)
    );
  }

  // County Autocomplete
  setupAutoComplete(fieldSelector, fieldName, countyAutocompleteList) {
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
      sort: (a, b) => {
        return countyAutocompleteList.indexOf(a.label) <
          countyAutocompleteList.indexOf(b.label)
          ? -1
          : 1;
      },
      list: countyAutocompleteList,
    };

    window.makeAutocomplete = new Awesomplete(
      fieldSelector,
      awesompleteSettings
    );
  }

  // Activity Autocomplete
  setupAutoCompleteActivity(
    fieldSelector,
    fieldName,
    activityAutocompleteList
  ) {
    let component = this;
    const awesompleteSettings = {
      autoFirst: true,
      minChars: 0,
      maxItems: 99,
      sort: function (a, b) {
        if (
          a["activity_search_autocomplete"] < b["activity_search_autocomplete"]
        ) {
          return -1;
        }
        if (
          a["activity_search_autocomplete"] > b["activity_search_autocomplete"]
        ) {
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
      list: activityAutocompleteList,
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

  hasCountyInput() {
    if (
      this.state["county"] === null ||
      this.state["county"] === "" ||
      this.state["county"] === "null"
    ) {
      // Check input content:
      var countyInput = document.getElementById("location-query");
      if (
        countyInput !== undefined &&
        countyInput !== null &&
        countyInput.value !== "" &&
        countyInput.value !== null &&
        countyInput.value.length !== undefined &&
        countyInput.value.length > 0
      ) {
        return true;
      }

      return false;
    }
    return true;
  }

  hasActivityInput() {
    if (
      this.state["activity"] === null ||
      this.state["activity"] === "" ||
      this.state["activity"] === "null"
    ) {
      // Check input content:
      var activityInput = document.getElementById("activity-query");
      if (
        activityInput !== undefined &&
        activityInput !== null &&
        activityInput.value !== "" &&
        activityInput.value !== null &&
        activityInput.value.length !== undefined &&
        activityInput.value.length > 0
      ) {
        return true;
      }

      return false;
    }
    return true;
  }

  cardDisplayLogic() {
    // Build data for cards.
    let selectedCounties = [];

    let selectedActivities = [];

    let viewAllCounties = false;
    let viewAllActivities = false;

    if (this.hasCountyInput() && !this.hasActivityInput()) {
      viewAllCounties = false;
      viewAllActivities = true;
    } else if (!this.hasCountyInput() && !this.hasActivityInput()) {
      viewAllCounties = true;
      viewAllActivities = true;
    } else if (!this.hasCountyInput() && this.hasActivityInput()) {
      viewAllCounties = true;
      viewAllActivities = false;
    } else if (this.hasCountyInput() && this.hasActivityInput()) {
      viewAllCounties = false;
      viewAllActivities = false;
    }

    // console.log("activity", this.state["activity"], "county", this.state["county"]);
    // console.log("viewAllActivities", viewAllActivities, "viewAllCounties", viewAllCounties);

    // Q: How many statuses are supported? Had there been a plan to show multiple counties?
    if (this.hasCountyInput()) {
      selectedCounties = [];
      this.countyStatuses.forEach((item) => {
        if (item.county == this.state["county"] || viewAllCounties === true) {
          selectedCounties.push(item);
        }
      });
    }

    if (this.hasActivityInput()) {
      // Build list of selected activities
      this.allActivities.forEach((searchResultData) => {
        if (
          searchResultData["activity_search_autocomplete"] ===
            this.state["activity"] ||
          viewAllActivities === true
        ) {
          selectedActivities.push(searchResultData);
        }
      });
    }

    // Update local variables
    this.selectedActivities = selectedActivities;
    this.selectedCounties = selectedCounties;
    this.viewAllActivities = viewAllActivities;
    this.viewAllCounties = viewAllCounties;
  }

  layoutCards() {
    // console.log("laying out cards", this.localData);
    // console.log("state", this.state);

    this.cardHTML = "";


    // Map data sources and labels to card responses.
    this.cardHTML = cardTemplate({
      // Interactive states
      county: this.state["county"],
      selectedActivity: this.state["activity"],
      selectedCounties: this.selectedCounties,
      hasCountyInput: this.hasCountyInput(),
      hasActivityInput: this.hasActivityInput(),
      // Data sets
      selectedActivities: this.selectedActivities,
      stateIndustryGuidanceData: this.localData["state-industry-guidance"].data,
      allActivities: this.allActivities,
      seeStateIndustryGuidanceLabel: this.translationsStrings
        .seeStateIndustryGuidanceLabel,
      primaryGuidanceLabel: this.translationsStrings.primaryGuidanceLabel,
      secondaryGuidanceLabel: this.translationsStrings.secondaryGuidanceLabel,
      additionalGuidanceLabel: this.translationsStrings.additionalGuidanceLabel,
      relatedGuidanceLabel: this.translationsStrings.relatedGuidanceLabel,
      guidancePdfLabel: this.translationsStrings.guidancePdfLabel,
      checklistPdfLabel: this.translationsStrings.checklistPdfLabel,
    });

    // Add card markup to card holder.
    this.querySelector(
      ".card-holder"
    ).innerHTML = `<div class="card-content">${this.cardHTML}</div>`;

  }
}
