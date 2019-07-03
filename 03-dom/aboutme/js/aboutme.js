document.body.style.fontFamily = "Arial, sans-serif";

////////////////////////////////////////////////////////////////////////////////

const nickname = document.getElementById('nickname');
nickname.innerText = 'The Blade';

document.getElementById('favorites').innerText = 'George, Paul, John, Pete, Ringo';
document.getElementById('hometown').innerText = 'Sydney';

////////////////////////////////////////////////////////////////////////////////

const listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[ i ].className = 'listitem';
}

////////////////////////////////////////////////////////////////////////////////

const bill = document.createElement('img'); // Detached DOM Node
bill.src = 'http://fillmurray.com/400/600';
document.body.appendChild( bill );
