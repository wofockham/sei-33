// recreate the cat program in JS

const fs = require('fs'); // This is built in to the Node.js standard library

// Synchronously: this is wrong
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8');
// console.log( fileData );

// Many asynchronous Node.js functions implement the Error First Pattern.
// Callbacks usually receive:
//   1. error param (null if no error occured)
//   2. data param

// Asynchronous
fs.readFile('flintstones.txxxt', 'utf-8', function (error, data) {
  if (error) {
    return console.error(error); // A bit wanky.
  }

  console.log(data);
});
console.log('You will probably see this first');

// TODO: Rewrite this code using Promises.
