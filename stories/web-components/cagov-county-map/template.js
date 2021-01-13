export default function template(json) {
    console.log("template", json);
    return /*html*/`<div>
        <div class="chart-title">title var here</div>
        <div class="chart-container">d3 chart here</div>
        <div class="chart-text">description here</div>
    </div>
    `
}
  