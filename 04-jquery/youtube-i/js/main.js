const links = document.querySelectorAll('li a');

for (var i = 0; i < links.length; i++) {
  const link = links[i];

  const href = link.getAttribute('href'); // link.href;
  const thumbnailUrl = youtube.generateThumbnailUrl( href );

  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbnailUrl); // thumbnail.src = thumbnailUrl;

  link.appendChild( thumbnail );
}
