var apiKey = "129327718f475acb9e16c2286c58b85c";

$(document).ready(function() {
  $('.weatherform').submit(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    var units = $('#units').val();
    $('#location').val("");
    $('#units').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showTemp').text("The temperature in " + city + " is " + response.main.temp + " " + units);
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showTemp').text(error.responseJSON.message);
      $('.showHumidity').text(error.responseJSON.message);
    });
  });
});
