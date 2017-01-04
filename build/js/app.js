(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  $('.unitform').submit(function(event) {
    event.preventDefault();
    var convTemp = $('.showTemp').val();

    $('.convertUnit').text("Hello World");
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

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

},{}]},{},[1]);
