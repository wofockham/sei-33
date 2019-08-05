// Callbacks Review ////////////////////////////////////////////////////////////

// A callback function is a function that is passed into another function which
// then calls that function for you, at some later point in time.

// Timers: order will be A, C, B
console.log('A: before setTimeout');
setTimeout(function () {
  console.log('B: inside setTimeout -- time has passed');
}, 4000);
console.log('C: after setTimeout'); // JS doesn't wait to run this code.

// jQuery's document ready: I, III, II
console.log('I: before the document ready');
$(document).ready(function () {
  console.log('II: the document is now ready');
});
console.log('III: after the document ready callback');

// Event handlers: Groucho, Chico AND THEN MAYBE Harpo
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');

// YOU ARE NOT EXPECTED TO UNDERSTAND THIS
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
}

each(colors, function (c) {
  console.log(c)
});

/*
colors.each do |c|
  puts c
end
*/

each(['Groucho', 'Harpo', 'Chico'], console.log);

// .forEach added in ES5
colors.forEach(function (anyDamnThing) {
  console.log(anyDamnThing);
});
