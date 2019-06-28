// Factories are a way to mass produce objects to they all have the same shape.

const catFactory = function (n, a, f) { // n: name, a: age, f: fur color
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    meow: function () {
      console.log( this );
      console.log(`Meow, my name is ${ this.name }`);
    }
  };
};

const cuteCats = [

		// { name: "Angel", age: 18, furColor: "grey" },
		// { name: "Evil", age: 14, furColor: "red" },
		// { name: "Meh", age: 12, "Fur Color": "white" }

    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')

	];

  for (let i = 0; i < cuteCats.length; i++) {
    console.log( `${ cuteCats[i].name } is ${ cuteCats[i].furColor }` );
  }

// Prototypal Inheritance //////////////////////////////////////////////////////
// Historically interesting but not essential for now (or anymore).

// Constructor
const Cat = function (n, a, f) {
  // no need to create the object: it's already there and it's called "this"
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log(`Meow, my name is ${ this.name }`);
  }
  // no need to return "this" -- it gets returned automagically.
};

const cooper = new Cat('Cooper', 2, 'striped grey');
const audrey = new Cat('Audrey', 2, 'striped grey');

// The advantage of Cat Prototypes
// You can extend the prototype AFTER you create them.

Cat.prototype.species = 'feline';
Cat.prototype.eat = function (food) {
  console.log('Yum, I love to eat ' + food);
};

audrey.eat('gelatin');
