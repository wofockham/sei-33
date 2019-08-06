const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (data) {
    $('h1').after(`<p>${ data.text }</p>`);
  });
};

$('#fetch').on('click', fetchFact);
fetchFact();
