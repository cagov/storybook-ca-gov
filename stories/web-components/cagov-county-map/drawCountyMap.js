import * as d3 from "d3";

export default // @TODO Let's use this as an opportunity to reformulate the function inputs & outputs.
/**
 * Render SVG based interactive county map using d3
 */

// @TODO Add d3 library to storybook.
function drawCountyMap({
  translations = null,
  data = null,
  domElement = null,
  chartOptions = null,
  chartBreakpointValues = null,
  screenDisplayType = null,
  // @TODO what would be better here?
  // data objects
  // clearly specified query container
  // which html content comes from data-labels & why (NOTE: this is advanced, we will make a couple of examples - a "hello-chart", and a few different case studies.)
}) {
  try {
    console.log(
      "translations",
      translations,
      "data",
      data,
      "domElement",
      domElement,
      "chartOptions",
      chartOptions,
      "chartBreakpointValues",
      chartBreakpointValues,
      "screenDisplayType",
      screenDisplayType
    );
    const svg = d3
      .select(domElement)
      .append("svg")
      .attr("viewBox", [
        0,
        0,
        chartBreakpointValues.width,
        chartBreakpointValues.height,
      ])
      .append("g");

    svg
      .append("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("x", 0)
      .attr("y", 0)
      .attr("fill", "yellow");

    const g = svg.append("g").attr("id", "map-layers")

    // // "land" from merged counties
    // const land = g.append("g")
    //   .attr("id", "land")
    //   .append("path")
    //   .datum(landArea)
    //   .attr("fill", "white")
    //   .attr("stroke-width", 1.25)
    //   .attr("stroke", 'white')
    //   .attr("stroke-line-join", "round")
    //   .attr("d", path)

    // // county boundaries
    // const countiesGroup = g.append("g").attr("id", "county-boundaries")
    // const tierColors = ["0000cc","e6b735","d97641","c43d53","802f67"];


    // @TODO NEXT: 
    // - add topoJSON data to data folder from observables example

    // countiesGroup.selectAll('.county')
    //   .data(countyFeats.features)
    //   .enter()
    //   .append('path')
    //   .attr("stroke-width", 1.25)
    //   .attr("stroke", 'white')
    //   .attr('d', path)
    //   .attr('fill', (d) => {
    //     let tier = '';
    //     tiers.forEach(t => {
    //       if(t.county.toLowerCase() === d.properties.NAME.toLowerCase()) {
    //         tier = t["Overall Status"];
    //       }
    //     })
    //     if(tier) {
    //       return "#"+tierColors[tier];
    //     } else {
    //       return 'gray';
    //     }
    //   })
    //   .on('mouseover', function(event, d){
    //     console.log(d);
    //     tooltip.html(`<div class="county-tooltip">
    //       <h3>${d.properties.NAME}</h2>
    //     </div>`); return tooltip.style("visibility", "visible");
    //   })
    //   .on("mousemove", function(){
    //     return tooltip.style("top", (parseInt(this.getBoundingClientRect().y)-10)+"px").style("left",(parseInt(this.getBoundingClientRect().x)+10)+"px");
    //   })
    //   .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

    // let tooltip = d3.select("body")
    //   .append("div")
    //   .style("position", "absolute")
    //   .style("z-index", "10")
    //   .style("visibility", "hidden")
    //   .style("background", "#fff")
    //   .text("a simple tooltip");

    // // labels
    // const labelsGroup = g.append("g").attr("id", "labels")

    // return svg.node();

  } catch (error) {
    console.error("error rendering cagov-county-map", error);
  }
}


