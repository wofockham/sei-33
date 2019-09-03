$(document).ready(function () {
  $('h1').css('color', 'limegreen');
});

document.addEventListener("turbolinks:load", function() {
  console.log('turbolinks:load');
  $('h1').css('color', 'red');
});
