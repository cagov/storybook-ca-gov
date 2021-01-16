import * as d3 from "d3";
/**
 * Render SVG based interactive county map using d3
 */
export default function drawChart({
  data = null,
}) {
  try {
    const svg = d3
      .select(domElement)
      .append("svg")
      .attr("viewBox", [
        0,
        0,
        400,
        400,
      ])
      .append("g");

    svg
      .append("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("x", 0)
      .attr("y", 0)
      .attr("fill", "yellow");

  } catch (error) {
    console.error("error rendering hello-chart", error);
  }
}


