Template.helloWorld.rendered = function() {
  console.log("helloWorld rendered function");

  var svg = d3.select("#d3-will-attach-here")
              .append("svg")
              .attr("width", 400)
              .attr("height", 200)
              .selectAll("d"); // I have to do this to get it to work

  svg.data(["I am an array element"]).enter()
      .append("a")
      .attr("href", "/hello")
      .append("rect")
      .attr("x", 0).attr("y", 0)
      .attr("height", 100).attr("width", 100);
};
