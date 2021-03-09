import { html } from "lit-html";
import "./../src/index.css";
import CAGovDropdown from './../cagov-dropdown';

/**
 * Primary UI component for user interaction
 */
export const WebComponent = (args) => {
    // console.log("web component data", args);
    return html`
      <cagov-dropdown>
        test
      </cagov-dropdown>
    `;
  };
  

// export const WebComponent = ({ data = null, label = "More languages" }) => {
//   let items = buildDropdownItems(data);
//   return html`
//     <cagov-dropdown>
//       <div class="dropdown-menu">
//         <a
//           class="btn btn-secondary dropdown-toggle"
//           href="#"
//           role="button"
//           id="dropdownMenuLink"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           ${label}
//         </a>

//         <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//           ${items.join("")}
//         </ul>
//       </div>
//     </cagov-dropdown>
//   `;
// };

// const buildDropdownItems = ({ data = null }) => {
//   let items = [];

//   data.map((link) => {

//     listItems.push(`
//         <li><a class="dropdown-item" href="${links[link].permalink}">${links[link].language}</a></li>
//         `);

//   });

//   return items;
// };
