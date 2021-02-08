/**
 * These were the fetch requests
 * Note for Storybook, we use data samples for speed, for being explicit about our inputs & outputs & for building unit tests for the component code.
 * We should also be able to load data from the public source & can show this as an example here.
 * We will set up a pattern here so that we can pull data from multiple sources.
 * Phase 1: Pull data from existing sources & load the reopening & state guidance data from JSON objects
 * Phase 2: Pub
 */

// getRemoteData() {
// console.log("data", this.localData);
// // content: "text"
// // countystatus: {docs: {…}, data: Array(58)}
// // covid19-county-webpages: {docs: {…}, data: Array(58)}
// // pubData: {docs: {…}, data: {…}}
// // reopening-matrix-data: {docs: {…}, data: {…}}
// // reopening-roadmap-activity-data: {docs: {…}, data: {…}}
// // rsho: {docs: {…}, data: {…}}

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
//   this.schoolsCanReopenList = data;
// }.bind(this));

// window.fetch(hostUrl + '/reopening-activities.json')
// .then(response => response.json())
// .then(function(data) {
//   this.allActivities = data.Table1;

//   let aList = [];
//   // aList.push(this.viewAll);
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
