import { buildMultilingualDataObject } from "./buildMultilingualDataObject";

import countyCovid19Webpages from "./../../../mock-datasets/reopening/data/en/records/covid19-county-webpages.json";
import rshoData from "./../../../mock-datasets/reopening/data/en/records/rsho.json";
import stateIndustryGuidance from "./../../../mock-datasets/reopening/data/en/records/data-covid19-state-industry-guidance.json";
import activitySearchBusiness from "./../../../mock-datasets/reopening/data/en/records/data-covid19-activity-business-search-data.json";

export const fetchData = ({
    hostUrl = `https://covid19.ca.gov/`
}) => {

    // Comes from the html page
    let theMatrix = document.querySelector('.the-matrix');
    if (theMatrix) {
        document.querySelector('.matrix-holder').innerHTML = theMatrix.innerHTML;
    }

    let remoteData = {
        tierStatusDescriptorsData: null,
        countyStatus: null,
        countyRegionsData: null,
        regionsClosedData: null,
        rshoData: null,
        activitySearchBusiness,
        stateIndustryGuidance,
        countyCovid19Webpage: countyCovid19Webpages,
        // schoolsMayReopenData: null,
        // commonPageLabels: null,
    };

    if (hostUrl !== null) {
        // Fetch remote public datasets.
        window.fetch(hostUrl + '/countystatus.json')
        .then(response => response.json())
        .then(function(data) {
            remoteData.countyStatus = data;
        }.bind(this));

        window.fetch(hostUrl + '/regionsclosed.json')
        .then(response => response.json())
        .then(function(data) {
            remoteData.regionsClosedData = data;
        }.bind(this));

        window.fetch(hostUrl + '/countyregions.json')
        .then(response => response.json())
        .then(function(data) {
            remoteData.countyRegionsData = data;
        }.bind(this));
        
        window.fetch(hostUrl + '/rsho.json')
        .then(response => response.json())
        .then(function(data) {
            remoteData.rshoData = data;
        }.bind(this));

        window.fetch(hostUrl + '/tier-status-descriptors.json')
        .then(response => response.json())
        .then(function(data) {
        remoteData.tierStatusDescriptorsData = data;
        }.bind(this));    
    }


// this.activateForms();
let dataResponse = buildMultilingualDataObject(remoteData);

}

        
// window.fetch(hostUrl + '/countyregions.json')
// .then(response => response.json())
// .then(function(data) {
//   this.countyRegions = data;
// }.bind(this));

// window.fetch(hostUrl + '/schools-may-reopen.json')
//         .then(response => response.json())
//         .then(function(data) {
//           this.schoolsCanReopenList = data;
//         }.bind(this));
        
//         window.fetch(hostUrl + '/reopening-activities.json')
//         .then(response => response.json())
//         .then(function(data) {
//           this.allActivities = data.Table1;
        
//         //   let aList = [];
//         //   // aList.push(this.viewAll);
//         //   data.Table1.forEach(item => {
//         //     aList.push(item['0'])
//         //   });
        
//         //   this.setupAutoCompleteActivity('#activity-query', 'activity', aList);
        
//         // document.querySelector('.reopening-tableau-embed').innerHTML = `<div class='tableauPlaceholder' id='viz1598633253507' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;Planforreducingcovid-19&#47;planforreducingcovid-19&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Planforreducingcovid-19&#47;planforreducingcovid-19' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;Planforreducingcovid-19&#47;planforreducingcovid-19&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>`;
        
//           // this.tableauStuff();
//         }.bind(this))
//         .catch(() => {
//           //resetForm();
//         });