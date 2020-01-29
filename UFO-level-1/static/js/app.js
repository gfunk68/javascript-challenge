// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

button.on("click", function() {

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

  var filteredData = tableData.filter(day => day.datetime === inputValue);

  console.log(filteredData);


  var summary = d3.select(".table-striped>tbody")

  summary.html("");

  filteredData.forEach(sighting => {
      var row = summary.append('tr');
      Object.entries(sighting).forEach(([key,value]) => {
          row.append('td').text(value)
      })

  })
  

});
