'use strict';

var state = {
  pageNum: 1,
  lastPageReached: false
};

var showImages = function showImages(results) {
  // Nested helper function
  var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change q to something else for different sizes
    ].join('');
  };

  _(results.photos.photo).each(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL }); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

var searchFlickr = function searchFlickr(terms) {
  if (state.lastPageReached) return;

  console.log('Searching Flickr for these terms: ' + terms, state);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: terms,
    format: 'json',
    page: state.pageNum++
  }).done(showImages).done(function (data) {
    console.log(data);
    if (data.photos.page >= data.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    var query = $('#query').val();
    state.pageNum = 1;
    state.lastPageReached = false;
    searchFlickr(query);
    $('#images').empty();
  });

  // Extremely twitchy
  var debouncedSearchFlickr = _.debounce(searchFlickr, 4000, { trailing: false });
  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom < 650) {
      var query = $('#query').val();
      debouncedSearchFlickr(query);
    }
  });
});