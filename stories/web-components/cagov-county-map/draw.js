// // This example also lives at [Observable](https://observablehq.com/@aaronhans/ca-county-tiers)
// // @TODO merge with references county-tiers map
// let map = {
//     // @TODO Add lots of JSDocs formatted comments.
//     const svg = d3.select(DOM.svg(width, height))
//       .style("width", "100%")
//       .style("height", "auto")
  
//     // background
//     svg.append("rect")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("x", 0)
//       .attr("y", 0)
//       .attr("fill", 'white')
  
//     // group for all map layers
//     const g = svg.append("g").attr("id", "map-layers")
    
//     // "land" from merged counties
//     const land = g.append("g")
//       .attr("id", "land")
//       .append("path")
//       .datum(landArea)
//       .attr("fill", "white")
//       .attr("stroke-width", 1.25)
//       .attr("stroke", 'white')
//       .attr("stroke-line-join", "round")
//       .attr("d", path)
  
//     // county boundaries
//     const countiesGroup = g.append("g").attr("id", "county-boundaries")
//     const tierColors = ["0000cc","e6b735","d97641","c43d53","802f67"];
    
//     countiesGroup.selectAll('.county')
//       .data(countyFeats.features)
//       .enter()
//       .append('path')
//       .attr("stroke-width", 1.25)
//       .attr("stroke", 'white')
//       .attr('d', path)
//       .attr('fill', (d) => {
//         let tier = '';
//         tiers.forEach(t => {
//           if(t.county.toLowerCase() === d.properties.NAME.toLowerCase()) {
//             tier = t["Overall Status"];
//           }
//         })
//         if(tier) {
//           return "#"+tierColors[tier];
//         } else {
//           return 'gray';
//         }
//       })
//       .on('mouseover', function(event, d){
//         console.log(d);
//         tooltip.html(`<div class="county-tooltip">
//           <h3>${d.properties.NAME}</h2>
//         </div>`); return tooltip.style("visibility", "visible");
//       })
//       .on("mousemove", function(){ 
//         return tooltip.style("top", (parseInt(this.getBoundingClientRect().y)-10)+"px").style("left",(parseInt(this.getBoundingClientRect().x)+10)+"px");
//       })
//       .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
    
//     let tooltip = d3.select("body")
//       .append("div")
//       .style("position", "absolute")
//       .style("z-index", "10")
//       .style("visibility", "hidden")
//       .style("background", "#fff")
//       .text("a simple tooltip");
  
//     // labels
//     const labelsGroup = g.append("g").attr("id", "labels")
  
//     return svg.node()
//   }