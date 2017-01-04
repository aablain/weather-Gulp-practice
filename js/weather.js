// function Weather(skinName) {
//   this.skin = skinName;
// }

Weather.prototype.temperature = function(temp,unit) {
  var output = 0;
  if (unit === "Celsius") {
    output = temp - 273;
  } else if (unit === "Fahrenheit") {
    output = (9/5)*(temp-273)+ 32;
  } else {
    output = temp;
  }
  return output;
};

exports.weatherModule = Weather;

// A module is a group of JavaScript functions and data that comprises some sort of functionality.
