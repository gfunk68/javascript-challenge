// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

button.on("click", function() {

  var dateinputElement = d3.select("#datetime");
  var dateValue = dateinputElement.property("value");
  
  var cityinputElement = d3.select("#city");
  var cityValue = cityinputElement.property("value");

  var stateinputElement = d3.select("#state");
  var stateValue = stateinputElement.property("value");

  var countryinputElement = d3.select("#country");
  var countryValue = countryinputElement.property("value");

  var shapeinputElement = d3.select("#shape");
  var shapeValue = shapeinputElement.property("value");

  if (!!dateValue || !!cityValue || !!stateValue || !!countryValue || !!shapeValue) {

  var filteredData = tableData;
  };
  
  if (!!dateValue) {
    var filteredData = filteredData.filter(day => day.datetime === dateValue);
  };
  
  if (!!cityValue) {
    var filteredData = filteredData.filter(day => day.city.toLowerCase() === cityValue.toLowerCase());
  };
  
  if (!!stateValue) {
    var filteredData = filteredData.filter(day => day.state.toLowerCase() === stateValue.toLowerCase());
  };
  
  if (!!countryValue) {
    var filteredData = filteredData.filter(day => day.country.toLowerCase() === countryValue.toLowerCase());
  };
  
  if (!!shapeValue) {
    var filteredData = filteredData.filter(day => day.shape.toLowerCase() === shapeValue.toLowerCase());
  };


//   console.log(inputValue);
//   console.log(tableData);
//   console.log(filteredData);


  var summary = d3.select(".table-striped>tbody")

  summary.html("");

  filteredData.forEach(sighting => {
      var row = summary.append('tr');
      Object.entries(sighting).forEach(([key,value]) => {
          row.append('td').text(value)
      })

  })

});

var clearbutton = d3.select("#clear-btn");

clearbutton.on("click", function() {
  var dateinputElement = d3.select("#datetime");
  var dateValue = dateinputElement.property("value");
  
  var cityinputElement = d3.select("#city");
  var cityValue = cityinputElement.property("value");

  var stateinputElement = d3.select("#state");
  var stateValue = stateinputElement.property("value");

  var countryinputElement = d3.select("#country");
  var countryValue = countryinputElement.property("value");

  var shapeinputElement = d3.select("#shape");
  var shapeValue = shapeinputElement.property("value");
  
  dateinputElement.property("value", "");
  cityinputElement.property("value", "");
  stateinputElement.property("value","");
  countryinputElement.property("value","");
  shapeinputElement.property("value", "");
});