/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (someFood) {
    if(this.stomach.length < 10){this.stomach.push(someFood);}
}
Person.prototype.poop = function (someFood) {
    this.stomach = [];
}
Person.prototype.toString = function () {
    return `${this.name}, ${this.age}`;
}

var Simon = new Person("Simon", 40);
console.log(Simon.name);
console.log(Simon.age);
console.log( Simon.toString());
console.log(Simon.stomach);
Simon.eat("1_egg");
Simon.eat("2_egg");
Simon.eat("3_egg");
Simon.eat("4_egg");
Simon.eat("5_fish");
Simon.eat("6_egg");
Simon.eat("7_egg");
Simon.eat("8_egg");
Simon.eat("9_egg");
Simon.eat("10_fish");
Simon.eat("11_fish");
Simon.eat("12_fish");
console.log(Simon.stomach);
console.log(Simon.stomach.length);
Simon.poop();
console.log(Simon.stomach);
console.log(Simon.stomach.length);




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/


function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
    if(this.tank===0){
        this.tank = gallons;
    }else {
        this.tank = this.tank  + gallons;
    }
};
Car.prototype.drive = function (distance) {
    if(distance>this.tank*this.milesPerGallon){
        this.odometer = this.tank*this.milesPerGallon;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles!`;
    }
    this.odometer = distance;
    this.tank = this.tank - (distance/this.milesPerGallon);
};

let Prius = new Car("Prius", 40);
console.log(Prius.model);
console.log(Prius.milesPerGallon);
Prius.fill(10);
console.log(Prius.tank);
console.log(Prius.drive(420));
console.log(Prius.odometer);
console.log(Prius.tank);
Prius.fill(10);
console.log(Prius.tank);
console.log(Prius.drive(320));
console.log(Prius.odometer);
console.log(Prius.tank);
Prius.fill(5);
console.log(Prius.tank);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby (name, age, favoriteToy) {
  Person.call(this, name, age); 
  this.favoriteToy = favoriteToy;
}

Baby.prototype.eat = function (someFood) {
  if(this.stomach.length < 10){this.stomach.push(someFood);}
}

Baby.prototype.poop = function () {
  this.stomach = [];
}
Baby.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
}
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
}

let Everest = new Baby("Everest", 3, "LEGO");
console.log(Everest.name, Everest.age, Everest.favoriteToy);
console.log(Everest.play());
console.log(Everest.stomach);
Everest.eat("1_egg");
console.log(Everest.stomach);
console.log(Everest.stomach.length);
Everest.poop();
console.log(Everest.stomach);
console.log(Everest.stomach.length);


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. In the global scope,this means  window/console Object.
  2. The object before the dot is this.
  3. We use a constructor function, this refers to the specific instance of the object that is created and returned by the constructor function.
  4. We use JavaScript's call or apply method, this is explicitly defined.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}