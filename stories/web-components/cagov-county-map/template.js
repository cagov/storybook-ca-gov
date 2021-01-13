export default function template({data = null}) {
  console.log("template", data);
  return /*html*/`
    <div>CHART DIV with D3</div>
    <div>LEGEND</div>
  `
}
