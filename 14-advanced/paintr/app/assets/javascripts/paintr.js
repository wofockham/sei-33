$(document).ready(() => {

  // Add a color swatch to the palette
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Select a colour from the palette
  // Event delegation: $(parent).on(event, child, callback)
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Deselect all previous selections.
    $(this).addClass('selected');
  });

  // Event for memory efficiency:
  $('.canvas').on('mouseover', '.pixel', function (event) {
    // Hold shift to enable painting
    if (event.shiftKey === false) {
      return;
    }
    const color = $('.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
