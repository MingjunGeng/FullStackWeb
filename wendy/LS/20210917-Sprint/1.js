console.log("test1");

// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   }
//   nestedFunction();
// }
// myFunction();

//Task 2: Counte
// function summation(number) {
//     /*Your Code Here*/
//     //let newArray = [];
//     let sum = 0;
//     for(let i=0; i <= number; i++){
//         sum += i; 
//     }
//     return sum;
// }

// function summation(number) {
//     /*Your Code Here*/
 
//     return number*(number+1)/2;

// }    
// console.log(summation(4));


const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
//Task 2: ADVANCED Array Methods
// function animalNames(zooAnimals){
//     /*Your Code Here*/
//     let newArray = [];
//     zooAnimals.forEach(element => {
//         //console.log(element.scientific_name);
//         newArray.push(`name: ${element.animal_name}, scientific: ${element.scientific_name}`);
//     });
//     return newArray;
//   }
// //   animalNames(zooAnimals);
// console.log(animalNames(zooAnimals));

// function lowerCaseNames(zooAnimals){
//     /*Your Code Here*/
//     let newArray = [];
//     zooAnimals.map(element => {
//         //console.log(element.animal_name.toLowerCase());
//         newArray.push(`name: ${element.animal_name.toLowerCase()}`);
//     });
//     return newArray;
//   }
//   //lowerCaseNames(zooAnimals);
// console.log(lowerCaseNames(zooAnimals));

//TASK 3 - 1
// function lowPopulationAnimals(zooAnimals){
//     /*Your Code Here*/
//     let newArray = zooAnimals.filter(function (item) {
//         return item.population < 5;
//     });
//     console.log(newArray);
//   }
//   lowPopulationAnimals(zooAnimals);
  //console.log(lowPopulationAnimals(zooAnimals));
//TASK 3 - 1
//   function lowPopulationAnimals(zooAnimals){
//     /*Your Code Here*/
//     return zooAnimals.filter(item =>item.population < 5);
//     //console.log(newArray);
//   }
//   //lowPopulationAnimals(zooAnimals);
//   console.log(lowPopulationAnimals(zooAnimals));


//TASK 4
// function USApop(zooAnimals){
//     /*Your Code Here*/
//     return zooAnimals.reduce(function (x, y) {
//         return x+y.population;
//     }, 0);
//   }
//   function USApop(zooAnimals){
//     /*Your Code Here*/
//     return zooAnimals.reduce( (x, y) => x+y.population, 0);
//   }
//   console.log(USApop(zooAnimals));

//Callbacks
// function consume(a, b, cb){
//     /*Your Code Here */
//     return cb(a, b);
//   }
// function add(a, b){
//       return a+b;
// }
//   console.log(consume(5, 6, add));
// function multiply(a, b){
//     return a*b;
// }
// console.log(consume(5, 6, multiply));
// //greeting
// function greeting(firstName, lastName){
//     return `Hello ${firstName} ${lastName}, nice to meet you!`;
// }
// console.log(greeting('Ming' ,'Geng'));
// console.log(consume("Mary", "Poppins", greeting))

//Topic 3
function CuboidMaker(attributes){
    /*Your Code Here */
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height;
  }
// console.log(CuboidMaker(4, 5,6));
var cubo = new CuboidMaker({length: 4, width: 5, height: 7});
console.log(cubo.length, cubo.width, cubo.height);
// //  function surfaceArea(){ return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);}
// // CuboidMaker.prototype = Object.create(surfaceArea);
// //console.log(cubo.surfaceArea());
CuboidMaker.prototype.volume = function(){ return this.length * this.width * this.height;}
CuboidMaker.prototype.surfaceArea = function(){ return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);}

// const cub = {
//     length: 4,
//     width: 5,
//     height: 5
//   }
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
  console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class CuboidMakerTwo{
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume (){ 
        return this.length * this.width * this.height;
    }
    surfaceArea(){ 
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboidTwo = new CuboidMakerTwo({
    length: 4,
    width: 5,
    height: 5
});
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130