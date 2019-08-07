console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// .each() /////////////////////////////////////////////////////////////////////

// es5 and greater
// nums.forEach(function (n) {
//   console.log( n );
// });

// Ruby style
_(nums).each(function (number, index, entireArray) {
  console.log('index', index);
  console.log('entireArray', entireArray);
  console.log( number );
});

// Functional style
// _.each(nums, function (n) {
//   console.log( n );
// });

const obj = {
  4: 'four',
  5: 'five!',
  6: 'six'
};

_(obj).each(function (value, key, entireObject) {
  console.log(`The key ${ key } has the value of ${ value }`);
});

const groucho = {
  name: 'Groucho Marx',
  instrument: 'guitar',
  vice: 'cigars'
};

_(groucho).each(function (value, key) {
  console.log(`${ key } is ${ value }.`);
});

// .map() //////////////////////////////////////////////////////////////////////
console.log( nums );

const byFives = function (n) {
  console.log(`byFives() and n is ${ n }`);
  return n * 5;
};

const multiplesOfFive = _(nums).map(byFives);
console.log( multiplesOfFive );

// .map also works with objects
const grouchoFacts = _(groucho).map(function (v, k) {
  return `${ k } is ${ v }`;
});

console.log( grouchoFacts );

// .reduce() ///////////////////////////////////////////////////////////////////
const sum = _(nums).reduce(function (runningTotal, n) {
  console.info('runningTotal', runningTotal, 'n', n);
  return runningTotal + n;
});
console.log( sum );

// .reduce also works with objects.

// .find() /////////////////////////////////////////////////////////////////////
const firstMultipleOfFive = _(nums).find(function (n) {
  console.log('considering', n, n % 5 === 0);
  return n % 5 === 0; // return true or false
});

console.log( firstMultipleOfFive );

// .find() also works with objects and if you ever actually use that I will buy you a beer.

// .filter() ///////////////////////////////////////////////////////////////////
const isEven = function (n) {
  return n % 2 === 0;
};

const evens = _(nums).select( isEven );
console.log( evens );

// .reject() ///////////////////////////////////////////////////////////////////
const odds = _(nums).reject( isEven );
console.log( odds );

// .pluck() ////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 25},
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 30},
  {name: 'Chico', instrument: 'piano', vice: 'infidelity', age: 32}
];
console.log( _(bros).pluck('vice') );

// .min() //////////////////////////////////////////////////////////////////////
console.log( _(nums).min() );
console.log( _(nums).max() );

// .sortBy() ///////////////////////////////////////////////////////////////////
console.log( _(bros).sortBy('instrument') );

// .shuffle() and .sample() ////////////////////////////////////////////////////
console.log( _(nums).shuffle() );
console.log( _(nums).sample() );
