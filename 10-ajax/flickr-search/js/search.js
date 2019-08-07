$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    console.log( query );
    
    // TODO: send that query to Flickr
  });
});
