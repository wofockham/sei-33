const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  const p = document.createElement('p');
  p.innerText = `${ book.title } by ${ book.author }`;
  document.body.appendChild( p );
}
