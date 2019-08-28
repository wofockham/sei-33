$(document).ready(() => {
  // Parallax //////////////////////////////////////////////////////////////////

  // Caching
  const $bill = $('.bill-js');
  const $body = $('body');

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop * 0.5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  // Bubble ////////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const {pageX:x, pageY:y} = e; // Destructuring with renaming.

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble" />').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo('body');

    $bubble.animate({top: -200}, 4000, () => {
      $bubble.remove(); // Remove unseen elements from the DOM AKA clean up after yourself.
    });
  });
});
