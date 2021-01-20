/**
 * A template that is used to generate the HTML markup 
 * @param {*} // @TODO JSDocs & hash signatures don't play nice, look up best way to document the variables here.
 */
export default function template({
    localData = null, // Data sets passed into the web-component.
    translations = null, // Translation strings read from HTML markup, data-label and data-group attributes.
}) {
    console.log("template data", localData, translations);
    return /*html*/`<div>
        <div class="chart-container">d3 chart here</div>
    </div>
    `
    // <div class="chart-title">title var: ${translations.title || null}</div>
    // <div class="chart-text">description: ${translations.description || null}</div>
}
  