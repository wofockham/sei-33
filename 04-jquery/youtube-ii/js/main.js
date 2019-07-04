const $links = $('li a'); // $ -- Hungarian Notation for a jQuery object

// TODO: .each()
for (var i = 0; i < $links.length; i++) {
  const $link = $( $links[i] ); // Turn the vanilla DOM node back into a jQuery object.

  const href = $link.attr('href');
  const thumbnailUrl = youtube.generateThumbnailUrl( href );

  const $thumbnail = $('<img>').attr('src', thumbnailUrl); // Chaining

  $link.prepend( $thumbnail );
}

// $('li a').each(function () {
//   $(this)
//     .prepend(
//       $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//     );
// });
