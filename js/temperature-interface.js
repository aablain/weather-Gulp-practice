$(document).ready(function(){
  $('.unitform').submit(function(event) {
    event.preventDefault();
    var convTemp = $('.showTemp').val();

    $('.convertUnit').text("Hello World");
  });
});
