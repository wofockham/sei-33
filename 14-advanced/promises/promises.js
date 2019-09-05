// Promises are an evolution of callbacks:
//   a way to handle or process data from asynchronous processes, whenever they're ready.

const fs = require('fs');

// readFile is asynchronous
// fs.readFile('simpsons.txt', 'utf-8', (err, content) => {
//   // error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log( content );
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  // resolve and reject are functions which when you call them, run the .then or .catch callbacks.
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject( err );
        return;
      }

      resolve( content );
    })
  });
};

const fileReadingPromise = readFile('simpsons.txt');

fileReadingPromise.catch((err) => {
  console.error('SOMETHING BAD HAPPENED', err);
})

fileReadingPromise.then((content) => {
  console.log(content);
});

fileReadingPromise.then((c) => {
  console.log('here is the content again but this time in uppercase');
  console.log( c.toUpperCase() );
});

// const axiosPromise = axios.get('whatever');
//
// Promise.all( userRequest, statsRequest ).then( () => {
//   console.log('EVERYTHING IS COMPLETE');
// })
//
// Promise.race( fileReadingPromise, axiosPromise ).then( () => {
//   console.log('SOMETHING FINISHED');
// })
