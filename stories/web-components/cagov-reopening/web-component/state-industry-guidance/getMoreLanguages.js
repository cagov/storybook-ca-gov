/**
 *
 * @param {array} param.links - Array of links to filter and sort
 * @param {array} param.language - Language code
 * @param {array} param.type - Filter variable
 * @return {string} - Markup with dropdown box.
 */
export const getMoreLanguages = ({
  links = null,
  language = "en",
  label = "More languages",
  type = null,
}) => {

  if (links !== undefined && links !== null && links.length > 0) {
    let listItems = [];

    let linksSortedByLanguage = Object.keys(links).sort((a, b) => {
      return links[a].language > links[b].language ? 1 : -1;
    });

    linksSortedByLanguage.map((link) => {
      if (
        links[link].language_code !== language &&
        links[link].git_pdf_template_type === type
      ) {
        listItems.push(
          `<li><a class="dropdown-item" href="${links[link].permalink}">${links[link].language}</a></li>`
        );
      }
    });

    if (listItems.length > 1) {
    let componentDropdown = `
      <cagov-dropdown>
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            ${label}
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          ${listItems.join("")}
      </ul>
      </cagov-dropdown>
      `;

    return componentDropdown;
    }

    // return `
    // <div class="dropdown">
    //   <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    //   More Languages
    //   </a>
    //   <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //     ${listItemsDisplay.join("")}
    //   </ul>
    // </div>
    // `;
  }
  return "";
};
