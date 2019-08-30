// const doSecretThing = function () {
//   const secretPassword = 'chicken';
//   console.log('I am a secret thing and I can see the password is', secretPassword);
// };

const idMaker = function () {
  // sets up an ID variable
  let id = 0; // This will persist through a closure.
  // returns a function that can access/use that ID variable
  return function () {
    return id++;
  };
};

const nextID = idMaker();

const firstID = nextID();
const secondID = nextID();
const thirdID = nextID();

// HTML Tags
// const p = function (content) {
//   return '<p>' + content + '</p>';
// };
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// };
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// };

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`;
  }
};

const p = tagMaker('p');
const h1 = tagMaker('h1');
const h2 = tagMaker('h2');

p('hello world'); // <p>hello world</p>

// Where you have this already
// $(document).ready(function () {
//   const password = 'chicken';
//
//   $('button').on('click', function () {
//     console.log( password );
//   });
// });

// IIFE:
// (function () {
//   const password = 'chicken';
//   const username = 'theBlade';
//   const socketAddress = axios.get('socketServer');
//   complicatedFunction(password, username, socketAddress);
// })();
