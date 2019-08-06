$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    const bookTitle = $('#book_title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

    // $.ajax() returns a Deferred object
    $.ajax(url).done(function (data) {
      if (data.totalItems === 0) return;
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover').attr('src', cover);
    }).done(function (d) {
      console.log(d);
    }).fail(function () {
      $('h1').text('There was error');
    });

    // This is the historic way of writing AJAX with jQuery
    // $.ajax(url, {
    //   success: function (data) {
    //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    //     $('#cover').attr('src', cover);
    //   }
    // });

  });
});
