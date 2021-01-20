import Awesomplete from 'awesomplete-es6';
import template from './template.js';
import getTranslations from "./get-translations-list.js";
import getScreenResize from "./get-window-size.js";

  // Show clear btn only if there is value (County)
const inputValueCounty = (e) => {
    console.log("county", e);
    var countyInput = document.getElementById("location-query");
    var clearCounty = document.getElementById("clearLocation");
    if (countyInput && countyInput.value) {
      clearCounty.classList.remove('d-none');
    } else {
      clearCounty.classList.add('d-none');
    }
  }

  // Show clear btn only if there is value (Activity)
const inputValueActivity = (e) => {
    console.log("activity", e);
    var activityInput = document.getElementById("activity-query");
    var clearActivity = document.getElementById("clearActivity");
    if (activityInput && activityInput.value) {
      clearActivity.classList.remove('d-none');
    } else {
      clearActivity.classList.add('d-none');
    }
  }

/**
 * This component provides a county and activity/business search interface
 * and displays combined datasets for different reopening statuses.
 */
class CAGovReopening extends window.HTMLElement {
  constructor() {
    super();
    // Optional state object to use for persisting data across interactions.
    this.state = {};
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
  }

  connectedCallback() {
    window.addEventListener("resize", (e) => {
      console.log("resize");
      this.handleResize(e);
    });

    // Get translations from web component markup.
    this.translationsStrings = getTranslations(this);
    // Render the chart for the first time.

    this.state = {};

    // Read content of stringified data-json that is inserted into the enclosing tag of the web-component.
    this.localData = JSON.parse(this.dataset.json);
    console.log("data", this.localData);

    // Replace the enclosing tag element with contents of template.
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.localData,
    });

    this.render();
    this.setupInputButtons();
  }

  handleResize(e) {
    // console.log("resize");
    getScreenResize(this);
    this.updateScreenOptions(e)
  }

  updateScreenOptions(e) {
    this.screenDisplayType = window.componentDisplay ?
      window.componentDisplay.displayType :
      "desktop";
    this.chartBreakpointValues = this.displayOptions.screens[
      this.screenDisplayType ? this.screenDisplayType : "desktop"
    ];
    // console.log(this.screenDisplayType);
  }

  /**
   * Remove any window events on removing this component.
   */
  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    this.innerHTML = template({
      translations: this.translationsStrings,
      localData: this.localData,
    });
    this.getLocalData();
  }

  getLocalData() {
    console.log("data", this.localData);

    // @TODO this will come from the html page
    let theMatrix = document.querySelector('.the-matrix');
    if (theMatrix) {
      document.querySelector('.matrix-holder').innerHTML = theMatrix.innerHTML;
    }

    // @TODO organize this data a little bit
    this.countyStatuses = this.localData["countystatus"].records;
    let aList = [];
    this.countyStatuses.forEach(c => {
      aList.push(c.county)
    })
    this.setupAutoComplete('#location-query', 'county', aList);

    this.countyRegions = this.localData.countyregions.records;
    this.regionsclosed = this.localData.regionsclosed.records;
    this.statusdesc = this.localData.statusdescriptors.records;
    this.schoolOKList = this.localData["schools-may-reopen"].records;
    this.allActivities = this.localData["reopening-activities"].records.Table1;

    let bList = [];
    // aList.push(this.viewall);
    this.allActivities.forEach(item => {
      bList.push(item['0'])
    });

    this.setupAutoCompleteActivity('#activity-query', 'activity', bList);
    // Tableau map would go here 
    this.activateForms();
  }

  activateForms() {
    console.log("Activate Forms");
    document.getElementById("location-query").addEventListener("input", function (event) {
      this.changeLocationInput(event.target.value);
    }.bind(this));

    document.getElementById("clearLocation").addEventListener("click", function() {
      this.changeLocationInput("");
    }.bind(this));

    document.getElementById("activity-query").addEventListener("input", function (event) {
      this.changeActivityInput(event.target.value);
    }.bind(this));

    document.getElementById("clearActivity").addEventListener("click", function() {
      this.changeActivityInput("");
    }.bind(this));

    document.querySelector('.reopening-activities').addEventListener('submit',function(event) {
      event.preventDefault();
      if(document.querySelector('#location-query').value == '') {
        this.state['county'] = null;
      }
      if(document.querySelector('#activity-query').value == '') {
        this.state['activity'] = null;
      }
      if(!this.state['activity'] && !this.state['county']) {
        this.querySelector('.card-holder').innerHTML = '';
        document.getElementById("reopening-error").style.visibility = "visible";
      } else {
        this.layoutCards();
      }
    }.bind(this));
  }

  setupAutoComplete(fieldSelector, fieldName, aList) {
    let component = this;
    const awesompleteSettings = {
      autoFirst: true,
      filter: function (text, input) {
        return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
      },
      item: function (text, input) {
        return Awesomplete.ITEM(text, input.match(/[^,]*$/)[0]);
      },
      replace: function (text) {
        let before = this.input.value.match(/^.+,\s*|/)[0];
        let finalval = before + text;
        this.input.value = finalval;
        component.state[fieldName] = finalval;
        // component.layoutCards();
      },
      list: aList
    };


    const makeAutocomplete = new Awesomplete(fieldSelector, awesompleteSettings)
  }

  tableauStuff() {
    // var divElement = document.getElementById('viz1598633253507');
    // var vizElement = divElement.getElementsByTagName('object')[0];
    // if ( divElement.offsetWidth > 921 ) { vizElement.style.width='920px';vizElement.style.height='547px';} 
    // else if ( (divElement.offsetWidth > 910) && (divElement.offsetWidth < 920)) { vizElement.style.width='900px';vizElement.style.height='547px';} 
    // else if ( (divElement.offsetWidth > 700) && (divElement.offsetWidth < 899) ) { vizElement.style.width='700px';vizElement.style.height='547px';} 
    // else { vizElement.style.width='100%';vizElement.style.height='627px';}
    // var scriptElement = document.createElement('script');
    // scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    // vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  setupAutoCompleteActivity(fieldSelector, fieldName, aList) {
    let component = this;
    const awesompleteSettings = {
      autoFirst: true,
      minChars: 0,
      maxItems: 99,
      sort: function (a, b) {
        if (a['0'] < b['0']) {
          return -1;
        }
        if (a['0'] > b['0']) {
          return 1;
        }
        return 0;
      },
      replace: function (text) {
        let before = this.input.value.match(/^.+,\s*|/)[0];
        let finalval = before + text;
        this.input.value = finalval;
        component.state[fieldName] = finalval;
        component.layoutCards();
        document.querySelector(fieldSelector).blur();
      },
      list: aList
    };

    window.makeAutocomplete2 = new Awesomplete(fieldSelector, awesompleteSettings);

    document.querySelector(fieldSelector).addEventListener('focus', function () {
      this.value = '';
      window.makeAutocomplete2.evaluate();
    });
  }

  layoutCards() {
    let replaceAllInMap = function (str) {
      let mapObj = {
        '&lt;': '<',
        '&gt;': '>',
        '’': '"',
        '”': '"'
      }
      var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
      return str.replace(re, function (matched) {
        return mapObj[matched.toLowerCase()];
      });
    }

    this.cardHTML = '';

    let selectedCounties = this.countyStatuses;

    if (this.state['county']) {
      selectedCounties = [];
      this.countyStatuses.forEach(item => {
        if (item.county == this.state['county']) {
          selectedCounties.push(item)
        }
      })
    }

    // If we are in one of these counties schools can reopen:
    const schoolOKList = this.schoolOKList;

    const schoolStrings = this.schoolsText;

    let schoolShenanigans = function (county) {
      if (!schoolStrings) {
        return "";
      }
      if (schoolOKList.indexOf(county) > -1) {
        return schoolStrings.schools_may_reopen + schoolStrings.schools_info;
      }
      return schoolStrings.schools_may_not_reopen + schoolStrings.schools_info;
    }

    let selectedActivities = this.allActivities;

    selectedCounties.forEach(item => {
      this.cardHTML += `<div class="card-county county-color-${item['Overall Status']}">
        <h2>${item.county}</h2>
        ${(this.countyRegions) ? '<h3>' + this.localData.regionLabel + ' ' + this.countyRegions[item.county] + '</h3>' : ''}
        ${(this.regionsclosed && this.countyRegions && this.regionsclosed.Table1.filter(r => r.region === this.countyRegions[item.county]).length > 0) ? '<p>Under <a href="/stay-home-except-for-essential-needs/#regional-stay-home-order">Regional Stay Home Order</a></p>' : ''}
        <div class="pill">${this.statusdesc.Table1[parseInt(item['Overall Status']) - 1]['County tier']}</div>
        <p>${this.statusdesc.Table1[parseInt(item['Overall Status']) - 1].description}. <a href="#county-status">${this.localData.understandTheData}</a></p>
        <p>${this.localData.countyRestrictionsAdvice} <a href="../get-local-information">${this.localData.countyRestrictionsCountyWebsite}</a>.</p>
      </div>`;

      if (this.state['activity']) {
        selectedActivities = [];
        this.allActivities.forEach(ac => {
          if (ac["0"] == this.state['activity'] || this.state['activity'] == this.viewall) {
            selectedActivities.push(ac);
          }
        })
      }

      selectedActivities.forEach(ac => {
        if (this.regionsclosed && this.countyRegions && this.regionsclosed.Table1.filter(r => r.region === this.countyRegions[item.county]).length > 0) { // if this county is in a region which is closed we will show them the RSHO column values
          this.cardHTML += `<div class="card-activity">
            <h4>${ac["0"]}</h4>
            <p>${ac["0"] === "Schools" ? schoolShenanigans(item.county) : ac["6"]}</p>
            <p>${ac["0"] === "Schools" ? "" : ac["5"].indexOf('href') > -1 ? `${this.localData.seeGuidanceText} ${replaceAllInMap(ac["5"])}` : ""}</p>
          </div>`
        } else {
          this.cardHTML += `<div class="card-activity">
            <h4>${ac["0"]}</h4>
            <p>${ac["0"] === "Schools" ? schoolShenanigans(item.county) : ac[item['Overall Status']]}</p>
            <p>${ac["0"] === "Schools" ? "" : ac["5"].indexOf('href') > -1 ? `${this.localData.seeGuidanceText} ${replaceAllInMap(ac["5"])}` : ""}</p>
          </div>`
        }
      })
    });

    // These classes are used but created with variables so the purge cannot find them, they are carefully placed here where they will be noticed
    this.cardHTML += `<div style="display:none">
      <div class="county-color-1 county-color-2 county-color-3 county-color-4"></div>
    </div>`;

    this.querySelector('.card-holder').innerHTML = `<div class="card-content">${this.cardHTML}</div>`;

    this.querySelector('.card-holder').classList.remove('inactive');

    // Dispatch custom event so we can pick up and track this usage elsewhere.
    const event = new window.CustomEvent('safer-economy-page-submission', {
      detail: {
        county: this.state.county,
        activity: this.state.activity
      }
    });

    window.dispatchEvent(event);
  }

  setupInputButtons() {
    console.log("setup input buttons");

    var activityInput = document.getElementById("activity-query");
    var countyInput = document.getElementById("location-query");

    if (countyInput) {
      // Show clear btn only on input (County)
      countyInput.addEventListener("input", function (e) {
        inputValueCounty();
      });
      //Clear buttons click events
      document.getElementById("clearLocation").addEventListener("click", function (e) {
        countyInput.value = '';
        inputValueCounty(e);
      });

      document.getElementById("clearActivity").addEventListener("click", function (e) {
        activityInput.value = '';
        inputValueActivity(e);
      });
    }

    console.log("activityInput", activityInput);

    if (activityInput) {
      // Show clear btn only on input (Activity)
      activityInput.addEventListener("input", function (e) {
        inputValueActivity(e);
      });

      activityInput.addEventListener("blur", function (e) {
        inputValueActivity(e);
      });
    }
  }
}

window.customElements.define('cagov-reopening', CAGovReopening);

// getRemoteData() {
// console.log("data", this.localData);
// // content: "text"
// // countystatus: {api: {…}, records: Array(58)}
// // covid19-county-webpages: {api: {…}, records: Array(58)}
// // pubData: {api: {…}, records: {…}}
// // reopening-matrix-data: {api: {…}, records: {…}}
// // reopening-roadmap-activity-data: {api: {…}, records: {…}}
// // rsho: {api: {…}, records: {…}}

// // @TODO this will come from the html page
// // let theMatrix = document.querySelector('.the-matrix');
// // if(theMatrix) {
// //   document.querySelector('.matrix-holder').innerHTML = theMatrix.innerHTML;
// // }

// const hostUrl = `https://covid19.ca.gov/`
// window.fetch(hostUrl + '/countystatus.json')
// .then(response => response.json())
// .then(function(data) {
//   // @TODO organize this data a little bit
//   this.countyStatuses = data;
//   let aList = [];
//   this.countyStatuses.forEach(c => { aList.push(c.county) })
//   this.setupAutoComplete('#location-query', 'county', aList);
// }.bind(this));

// window.fetch(hostUrl + '/countyregions.json')
// .then(response => response.json())
// .then(function(data) {
//   this.countyRegions = data;
// }.bind(this));

// window.fetch(hostUrl + '/regionsclosed.json')
// .then(response => response.json())
// .then(function(data) {
//   this.regionsclosed = data;
// }.bind(this));

// window.fetch(hostUrl + '/statusdescriptors.json')
// .then(response => response.json())
// .then(function(data) {
//   this.statusdesc = data;
// }.bind(this));

// window.fetch(hostUrl + '/schools-may-reopen.json')
// .then(response => response.json())
// .then(function(data) {
//   this.schoolOKList = data;
// }.bind(this));

// window.fetch(hostUrl + '/reopening-activities.json')
// .then(response => response.json())
// .then(function(data) {
//   this.allActivities = data.Table1;

//   let aList = [];
//   // aList.push(this.viewall);
//   data.Table1.forEach(item => {
//     aList.push(item['0'])
//   });

//   this.setupAutoCompleteActivity('#activity-query', 'activity', aList);

//   // document.querySelector('.reopening-tableau-embed').innerHTML = `<div class='tableauPlaceholder' id='viz1598633253507' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;Planforreducingcovid-19&#47;planforreducingcovid-19&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Planforreducingcovid-19&#47;planforreducingcovid-19' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;Planforreducingcovid-19&#47;planforreducingcovid-19&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>`;

//   // this.tableauStuff();
// }.bind(this))
// .catch(() => {
//   //resetForm();
// });

// this.activateForms();
// }