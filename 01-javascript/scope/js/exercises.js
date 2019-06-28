// Global Scope ////////////////////////////////////////////////////////////////

const message = "Hello World";

const showMessage = function () {
  console.log( message );
};

showMessage();

// Local or function scope /////////////////////////////////////////////////////

const showLocalMessage = function () {
  var localMessage = "Goodbye Cruel World";
  console.log( localMessage );
};

showLocalMessage();

// var inside a block //////////////////////////////////////////////////////////
if (23 === 23) {
  var hotdogs = 'with BBQ sauce'; // function scope
  console.log( hotdogs );
}

console.log( hotdogs ); // Still in scope

// let inside a block //////////////////////////////////////////////////////////
if (24 === 24) {
  let goldfish = true; // block scope
  console.log( goldfish );
}

// console.log( goldfish ); // Out of scope

// Loops with let //////////////////////////////////////////////////////////////
const bros = ['Groucho', 'Harpo', 'Chico'];

for (let i = 0; i < bros.length; i++) {
  console.log( bros[ i ] );
}

// console.log( i ); // Out of scope

// Scope of const is the same as let ///////////////////////////////////////////
if (25 === 25) {
  const password = 'swordfish';
  console.log( password );
}
