console.log("test TASK!!!");

//
// class Airplane {
//     constructor(name) {
//       this.name = name;
//       this.isFlying = false;
//     }
//     takeOff() {
//       this.isFlying = true;
//     }
//     land() {
//       this.isFlying = false;
//     }
//   }
//   var b = new Airplane("BB");
//   console.log(b.isFlying);
//   b.takeOff();
//   console.log(b.name);  
//   console.log(b.isFlying);


// TASK 1
//   class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.stomach = [];
//     }
//     eat(someFood) {
//       if(this.stomach.length < 10){this.stomach.push(someFood);}
//     }
//     poop() {
//         this.stomach = [];
//     }
//     toString() {
//         return `${this.name}, ${this.age}`;
//     }
//   }
//     var Mingjun = new Person("Mingjun", 40);
//     console.log(Mingjun.name);
//     console.log(Mingjun.age);
//     console.log( Mingjun.toString());
//     console.log(Mingjun.stomach);
//     Mingjun.eat("1_egg");
//     Mingjun.eat("2_egg");
//     Mingjun.eat("3_egg");
//     Mingjun.eat("4_egg");
//     Mingjun.eat("5_fish");
//     Mingjun.eat("6_egg");
//     Mingjun.eat("7_egg");
//     Mingjun.eat("8_egg");
//     Mingjun.eat("9_egg");
//     Mingjun.eat("10_fish");
//     Mingjun.eat("11_fish");
//     Mingjun.eat("12_fish");
//     console.log(Mingjun.stomach);
//     console.log(Mingjun.stomach.length);
//     Mingjun.poop();
//     console.log(Mingjun.stomach);
//     console.log(Mingjun.stomach.length);

// TASK 2
// class Car{
//     constructor(model, milesPerGallon) {
//         this.model = model;
//         this.milesPerGallon = milesPerGallon;
//         this.tank = 0;
//         this.odometer = 0;
//     }
//     fill(gallons) {
//         if(this.tank===0){
//             this.tank = gallons;
//         }else {
//             this.tank = this.tank  + gallons;
//         }
//     }
//     drive(distance) {
//         if(distance>this.tank*this.milesPerGallon){
//             this.odometer = this.tank*this.milesPerGallon;
//             this.tank = 0;
//             return `I ran out of fuel at ${this.odometer} miles!`;
//         }
//         this.odometer = distance;
//         this.tank = this.tank - (distance/this.milesPerGallon);
//     }

// } 
//   let Prius = new Car("Prius", 40);
//   console.log(Prius.model);
//   console.log(Prius.milesPerGallon);
//   Prius.fill(10);
//   console.log(Prius.tank);
//   console.log(Prius.drive(420));
//   console.log(Prius.odometer);
//   console.log(Prius.tank);
//   Prius.fill(10);
//   console.log(Prius.tank);
//   console.log(Prius.drive(320));
//   console.log(Prius.odometer);
//   console.log(Prius.tank);
//   Prius.fill(5);
//   console.log(Prius.tank);

//TASK 3
let Grade = 0;
class Lambdasian {
      constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location
    }
    
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
const Ming = new Lambdasian({
    name: 'Ming',
    age: 40,
    location: 'California'
  });
  console.log(Ming.name, Ming.age, Ming.location);
  console.log(Ming.speak());


//TASK 4
class Instructor extends Lambdasian {
    constructor(childAttrs) {
        super(childAttrs);
        this.specialty = childAttrs.specialty;
        this.favLanguage = childAttrs.favLanguage;
        this.catchPhrase = childAttrs.catchPhrase;
        //this.subject =childAttrs.subject;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    changeGrade(){
        return Grade = Math.floor(Math.random() * 100)+1;
    }
}
const Simon = new Instructor({
    age: 38,
    name: 'Simon',
    location: 'California',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`,
  });
  console.log(Simon.name, Simon.age, Simon.location);
  console.log(Simon.specialty, Simon.favLanguage, Simon.catchPhrase);
  console.log(Simon.demo('User-Interface-II'));
  console.log(Grade);
  Simon.changeGrade();
  console.log(Grade);
  let Robert = {
      name: 'Robert'
  };
  console.log(Simon.grade(Ming, 'User-Interface-II'));


  //TASK 5
  class Student extends Lambdasian {
    constructor(childAttrs) {
        super(childAttrs);
        this.previousBackground = childAttrs.previousBackground;
        this.className = childAttrs.className;
        this.favSubjects = childAttrs.favSubjects;
    }
    
    listSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(){
        if(Grade > 70){
            return `graduate!!!`;
        }else{
            return `increase their score`;
        }
    }
  }

  const William = new Student({
    age: 35,
    name: 'William',
    location: 'California',
    previousBackground: 'Driver',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JS'],
  });
  console.log(William.name, William.age, William.location);
  console.log(William.previousBackground, William.className, William.favSubjects);
  console.log(Grade);
  console.log(William.graduate());
  console.log(William.listSubjects() );
  console.log(William.PRAssignment("Responsive-Design") );
  console.log(William.sprintChallenge("Responsive-Design") );


  //TASK 6
  class ProjectManager extends Instructor {
    constructor(childAttrs) {
        super(childAttrs);
        this.gradClassName = childAttrs.gradClassName;
        this.favInstructor = childAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
const Wendy = new ProjectManager({
    age: 39,
    name: 'Wendy',
    location: 'California',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor:  'Sean',
  });
console.log(Wendy.name, Wendy.age, Wendy.location);
console.log(Wendy.specialty, Wendy.favLanguage, Wendy.catchPhrase);
console.log(Wendy.gradClassName, Wendy.favInstructor);
console.log(Wendy.standUp('CS1-help'));
// let Robert = {
//     name: 'Robert'
// };
console.log(Wendy.debugsCode(Robert, 'User-Interface-II'));


//book
// class Person {
//     constructor(attributes) {
//       this.age = attributes.age;
//       this.name = attributes.name;
//       this.homeTown = attributes.homeTown;
//     }
//     speak() {
//       return `Hello, my name is ${this.name}`;
//     }
//   }

// //   const fred = new Person({
// //     age: 35,
// //     name: 'Fred',
// //     homeTown: 'Bedrock'
// //   });
// //   console.log(fred.name, fred.age, fred.homeTown);
// //   console.log(fred.speak());

// //   class Child extends Person {
// //     constructor(childAttrs) {
// //       super(childAttrs);
// //       this.isChild = childAttrs.isChild;
// //     }
// //     checkIfChild() {
// //       if(this.isChild) {
// //       console.log(`${this.speak()} and I am a child object`);
// //     }
// //   }
// // }
// // const pebbles = new Child({
// //     age: 3,
// //     name: 'Pebbles',
// //     homeTown: 'Bedrock',
// //     isChild: true
// //   });

// // console.log(pebbles.name, pebbles.age, pebbles.homeTown);
// // console.log(pebbles.speak());
// // console.log(pebbles.checkIfChild());