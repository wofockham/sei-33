const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return; // It's too soon for us to see any data yet.
  }

  document.body.innerHTML = xhr.responseText;
};

xhr.open('GET', 'http://numbersapi.com/random/trivia');
xhr.send(); // Asynchronous
