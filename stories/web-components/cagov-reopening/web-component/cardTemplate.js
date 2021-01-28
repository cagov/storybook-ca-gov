export const cardTemplate = (selectedCounties) => {
    return `card layout here`;
//     return selectedCounties.forEach((item) => {
//     this.cardHTML += `<div class="card-county county-color-${
//       item["Overall Status"]
//     }">
//       <h2>${item.county}</h2>
      
//       ${
//         this.countyRegions
//           ? "<h3>" +
//             this.translationsStrings.regionLabel +
//             " " +
//             this.countyRegions[item.county] +
//             "</h3>"
//           : ""
//       }

//       ${
//         this.regionsclosed &&
//         this.countyRegions &&
//         this.regionsclosed.Table1.filter(
//           (r) => r.region === this.countyRegions[item.county]
//         ).length > 0
//           ? '<p>Under <a href="/stay-home-except-for-essential-needs/#regional-stay-home-order">Regional Stay Home Order</a></p>'
//           : ""
//       }
      
//       <div class="pill">${
//         this.statusdesc.Table1[parseInt(item["Overall Status"]) - 1][
//           "County tier"
//         ]
//       }</div>
      
//       <p>${
//         this.statusdesc.Table1[parseInt(item["Overall Status"]) - 1]
//           .description
//       }. <a href="#county-status">${
//       this.translationsStrings.understandTheData
//     }</a></p>
      
//       <p>${
//         this.translationsStrings.countyRestrictionsAdvice
//       } <a href="../get-local-information">${
//       this.translationsStrings.countyRestrictionsCountyWebsite
//     }</a>.</p>
    
//       </div>`;

//     if (this.state["activity"]) {
//       selectedActivities = [];
//       this.allActivities.forEach((ac) => {
//         if (
//           ac["0"] == this.state["activity"] ||
//           this.state["activity"] == this.viewall
//         ) {
//           selectedActivities.push(ac);
//         }
//       });
//     }

//     selectedActivities.forEach((ac) => {
//       if (
//         this.regionsclosed &&
//         this.countyRegions &&
//         this.regionsclosed.Table1.filter(
//           (r) => r.region === this.countyRegions[item.county]
//         ).length > 0
//       ) {
//         // if this county is in a region which is closed we will show them the RSHO column values
//         this.cardHTML += `<div class="card-activity">
//           <h4>${ac["0"]}</h4>
//           <p>${
//             ac["0"] === "Schools" ? schoolShenanigans(item.county) : ac["6"]
//           }</p>
//           <p>${
//             ac["0"] === "Schools"
//               ? ""
//               : ac["5"].indexOf("href") > -1
//               ? `${
//                   this.translationsStrings.seeGuidanceText
//                 } ${replaceAllInMap(ac["5"])}`
//               : ""
//           }</p>
//         </div>`;
//       } else {
//         this.cardHTML += `<div class="card-activity">
//           <h4>${ac["0"]}</h4>
//           <p>${
//             ac["0"] === "Schools"
//               ? schoolShenanigans(item.county)
//               : ac[item["Overall Status"]]
//           }</p>
//           <p>${
//             ac["0"] === "Schools"
//               ? ""
//               : ac["5"].indexOf("href") > -1
//               ? `${
//                   this.translationsStrings.seeGuidanceText
//                 } ${replaceAllInMap(ac["5"])}`
//               : ""
//           }</p>
//         </div>`;
//       }
//     });
//   )

// this.cardHTML += `<div style="display:none">
// <div class="county-color-1 county-color-2 county-color-3 county-color-4"></div>
// </div>`;
};