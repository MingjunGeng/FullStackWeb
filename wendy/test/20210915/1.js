console.log("fsssd");

// "this"

// window binding
// console.log(window);
// console.log(this);

// 'use strict';
// const dog = 'Lilly';
// console.log(dog);
// implicit binding

// const aGhost = {
//     name: "Casper",
//     phrase: 'Booo!',
//     ghost: function() {
//       console.log(this.boo);
//     }
//   }
  
//   const aGhost = {
//     name: "Casper",
//     phrase: 'Booo!',
//     ghost: function() {
//         //console.log(this.name);
//     //   return this.phrase;
//     }
//   }
//   console.log(aGhost.ghost());
//   console.log(this);
const petOne = {
    name: 'Lilly',
    species: 'dog',
    favFood: 'hydrolyzed protein',
    eat: function() {
      console.log('this1', this);
      console.log(`${this.name} is a ${this.species} who likes to eat ${this.favFood}.`)
    }
  }
  
  const petTwo = {
    name: 'Spook',
    species: 'cat',
    favFood: 'treats',
    eat: function() {
      console.log('this2', this);
      console.log(`${this.name} is a ${this.species} who likes to eat ${this.favFood}.`)
    }
  }
  
  const petThree = {
    name: 'Chloe',
    species: 'dog',
    favFood: 'steak',
    eat: function() {
      console.log('this3', this);
      console.log(`${this.name} is a ${this.species} who likes to eat ${this.favFood}.`)
    }
  }
  
//   petOne.eat();
//   petOne.drink();
  // petTwo.eat();
  // petThree.eat();

  const Person = {
    name: 'MJ',
    age: 19,
    location: "CA",
    greet: function () {
        return `hi, i am ${this.name} from ${this.location} and i am ${this.age} years old`;
    }
  }
console.log( Person.greet());
//.call
// function ghost() {
//     console.log(this);
//     console.log(`${this.name} says ${this.boo}`);
//   }
  
//   const ghostObj1 = {
//     name: 'Casper',
//     boo: 'booooooooooo!'
//   }
//   const ghostObj2 = {
//     name: 'Ghost',
//     boo: 'booooooooooo!'
//   }
  
//   ghost.call(ghostObj1);
//   ghost.call(ghostObj2);

  // .apply
// immediately invokes the function you call it on
// you can pass in args as an array
// function ghost(shoes, shirt, color) {
//     console.log(this);
//     console.log(`${this.name} says ${this.boo}`);
//     console.log(`${this.name} wears ${shirt} shirts and ${shoes}`);
//   }
//   const ghostObj1 = {
//     name: 'Casper',
//     boo: 'booooooooooo!'
//   }
  
//   ghost.apply(ghostObj1, ['a single boot', 'polkadotted', 'white']);


//   function ghost(shoes, shirt, color, otherParam) {
//     console.log(this);
//     console.log(`${this.name} says ${this.boo}`);
//     console.log(`${this.name} wears ${shirt} shirts and ${shoes}`);
//     console.log(otherParam);
//   }
//   const ghostObj1 = {
//     name: 'Casper',
//     boo: 'booooooooooo!'
//   }
  
//   const boundGhost = ghost.bind(ghostObj1, 'polkadotted', 'a single boot');
//   boundGhost();


//   function say(params) {
//     console.log(`${this.name} says ${this.sound}`);
//   }
//   const animal = {
//       name: "dog",
//       sound: "ww"
//   }
//   say.call(animal)

// BREAKOUT 2:
// create a function and use call to make an animal say a sound
// create an animal obj, give it a name, species, and sound
// function animalSounds() {
//   console.log(`${this.name} says ${this.sound}!`);
// }

// const animal = {
//   name: 'Betsy',
//   species: 'cow',
//   sound: 'mooooo'
// }
// animalSounds.call(animal);

// new binding
// function Ghost(saying) {
//   this.phrase = saying;
// }

// const myGhost1 = new Ghost('Casper the Friendly Ghost!');
// const myGhost2 = new Ghost('Slimer the Unfriendly Ghost!');
// console.log(myGhost1.phrase);
// console.log(myGhost2.phrase);

// // CONSTRUCTORS!!!
// function Pet(attributes) {
//     this.name = attributes.name;
//     this.species = attributes.species;
//     this.favFood = attributes.favFood;
//     this.phrase = attributes.phrase;
//     this.toy = attributes.toy;
//   }
  
//   const attrs = {
//     name: 'Lilly',
//     species: 'dog',
//     favFood: 'hydrolyzed protein',
//     phrase: 'bark bark bark',
//     toy: 'ball'
//   }
  
//   const lilly = new Pet(attrs);
//   console.log(lilly.name);

// // CONSTRUCTORS!!!
function Pet(attributes) {
    this.name = attributes.name;
    this.species = attributes.species;
    this.favFood = attributes.favFood;
    this.phrase = attributes.phrase;
    this.toy = attributes.toy;
  }
  
//   const attrs1 = {
//     name: 'Lilly',
//     species: 'dog',
//     favFood: 'hydrolyzed protein',
//     phrase: 'bark bark bark',
//     toy: 'ball'
//   };
//   const attrs2 = {
//     name: 'Spook',
//     species: 'dog',
//     favFood: 'hydrolyzed protein',
//     phrase: 'bark bark bark',
//     toy: 'ball'
//   };
//   const attrs3 = {
//     name: 'Chloe',
//     species: 'dog',
//     favFood: 'hydrolyzed protein',
//     phrase: 'bark bark bark',
//     toy: 'ball'
//   };
  
//   Pet.prototype.eat = function() {
//     console.log(`${this.name} eats ${this.favFood}.`);
//   }
//   console.log(Pet.prototype);
  
//   const lilly = new Pet(attrs1);
//   const spook = new Pet(attrs2);
//   const chloe = new Pet(attrs3);
//   // above is the same as this:
//   // const lilly = new Pet({
//   //   name: 'Lilly',
//   //   species: 'dog',
//   //   favFood: 'hydrolyzed protein',
//   //   phrase: 'bark bark bark',
//   //   toy: 'ball'
//   // });
//   console.log(lilly.eat());
// //   console.log(spook.eat());
// //   console.log(chloe.eat());
//   console.log(lilly);



  function BabyAnimal(attributes) {
    this.mother = attributes.mother;
    Pet.call(this, attributes);
    console.log(this);
  }
  
  BabyAnimal.prototype = Object.create(Pet.prototype);
  
  const babyAttrs = {
    name: 'Chloe',
    species: 'dog',
    favFood: 'hydrolyzed protein',
    phrase: 'bark bark bark',
    toy: 'ball',
    mother: 'Mama'
  }
  
  const baby = new BabyAnimal(babyAttrs);
  console.log(baby);

//   function sayHi(){
//     let names = ["Kali", "Inderpal", "Nicole", "Megan"];
//     for(x in names){
//     console.log(`Hi my name is ${names[x]}`)
//     };
// }
   
//    console.log(names);
//    sayHi();

printTest();

function printTest(){
  console.log('this printed!');
}