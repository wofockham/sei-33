const groucho = {
  fullname: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.fullname }`;
  }
};

console.log( groucho.greeting() );

const unboundGreeting = groucho.greeting;
console.log( unboundGreeting() ); // "Blah blah undefined"

console.log('.bind()')
const boundGreeting = groucho.greeting.bind( groucho );
console.log( boundGreeting() );
const forMeo = groucho.greeting.bind( {fullname: 'Meo Rules'} );

console.log('.call()')
console.log( unboundGreeting.call( groucho ) );
console.log( unboundGreeting.call( { fullName: 'Harpo Marx' }, 1, 2, 3 ) );

// .apply()
const numbers = [1, 4, 6, 8, 9, 1001];

// es5
Math.max.apply( Math, numbers ); // .apply will turn an array of elements into a list of parameters.

// es6
Math.max( ...numbers ); // the ... spread operator turns an array into a list of parameters.
