$(document).ready(function () {
  $('#name').on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  }).on('keyup', function (event) {
    const input = $(this).val();
    $('header h1').text(`Welcome ${ input }`);
  });

  const $bill = $('img'); // Cacheing
  $(window).on('mousemove', function (event) {
    const opacity = event.clientY / window.innerHeight;
    $bill.css('opacity', opacity);
  });

  const randomColor = function () {
    return Math.random() * 255;
  };

  const $body = $('body'); // Caching
  $(window).on('mousemove', function (event) {
    const bgColor = `rgb( ${randomColor()}, ${randomColor()}, ${randomColor()} )`;
    $body.css('background-color', bgColor);
  });

});
