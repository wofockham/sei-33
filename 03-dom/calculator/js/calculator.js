const squareButton = document.getElementById('square-button');

const squareNumber = function () {
  const n = parseInt( document.getElementById('square-input').value );
  document.getElementById('solution').innerHTML = n * n;
};

squareButton.addEventListener('click', squareNumber);

const halfButton = document.getElementById('half-button');

const halveNumber = function () {
  const n = parseInt( document.getElementById('half-input').value );
  document.getElementById('solution').innerHTML = n / 2;
}

halfButton.addEventListener('click', halveNumber);
