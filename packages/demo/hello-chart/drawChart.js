import * as d3 from "d3";
/**
 * Render SVG based interactive county map using d3
 */
export default function drawChart({
  domElement = null,
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

    if (data !== null) {
      data.map((item, index) => {
        let color = '#'+Math.floor(Math.random() * Math.pow(2,32) ^ 0xffffff).toString(16).substr(-6);
        return svg
          .append("rect")
          .attr("width", 40)
          .attr("height", 40)
          .attr("x", index * 10)
          .attr("y", index * 10)
          .attr("fill", color);
      })
      
    }
  } catch (error) {
    console.error("error rendering hello-chart", error);
  }
}


