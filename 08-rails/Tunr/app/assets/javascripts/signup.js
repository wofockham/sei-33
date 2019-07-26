$(document).ready(function () {

  // check if we are on the right page:
  if ( $('form.new_user').length === 0 ) {
    return;
  }

  console.log('this code will not be executed except on the page that has the form we care about');

  $('form.new_user').on('submit', function () {
    alert('Thank you for joining our site. You will find it so wonderful that you will vomit');
  });
});
