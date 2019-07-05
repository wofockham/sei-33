const $links = $('li a');

const thumbnailify = function ($link) {
  const href = $link.attr('href');
  const thumbnailUrl = youtube.generateThumbnailUrl( href );

  const $thumbnail = $('<img>').attr('src', thumbnailUrl); // Chaining

  $link.prepend( $thumbnail );

  $link.on('click', function (event) {
    event.preventDefault();

    const embedUrl = youtube.generateEmbedUrl(href);
    const embedCode = `<iframe width="560" height="315" src="${ embedUrl }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    $('#player').hide().html(embedCode).fadeIn(2000); // Chaining
  });
};

// TODO: .each()
for (var i = 0; i < $links.length; i++) {
  thumbnailify( $($links[i]) )
}

// $('li a').each(function () {
//   $(this)
//     .prepend(
//       $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//     );
// });

$('h2').funText(500, 'reverseCandy');
$('a').funText(200, 'reverseCandy');
