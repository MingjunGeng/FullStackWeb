console.log("test.20200914");

// const calc = (num1, num2, operator) => operator(num1, num2);

// // callback functions
// const add = (num1, num2) => num1 + num2;
// const subtract = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num1 / num2;

// console.log(calc(9, 5, add));
// console.log(calc(9, 5, subtract));
// console.log(calc(9, 5, multiply));
// console.log(calc(9, 5, divide));


//Advanced Array Methods
//data


//2
// const cityData = [
//   {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
//   {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
//   {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
//   {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
// ];

// cityData.forEach(function(item, index){
//   console.log(item.city);
//   console.log(index);
// });

// // const upperCaseCities = [];
// // cityData.forEach(function(item){
// //   upperCaseCities.push(item.city.toUpperCase());
// // });

// // console.log(upperCaseCities);

// // // arrow function syntax 
// // const upperCaseCities = [];

// // cityData.forEach(item => upperCaseCities.push(item.city.toUpperCase()));

// // console.log(upperCaseCities);

// const cityData = [
//     {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
//     {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
//     {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
//     {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
//   ];
  
//   //.map()
//   // returns a new array automatically 
//   // used for coverting data
//   // needs the return keyword 
  
// //   const upperCaseCities = cityData.map(function(item){
// //     // whatever comes after return is pushed to my new array in this case it's upperCaseCites
// //     return item.city.toUpperCase();
// //   });
  
// //   console.log(upperCaseCities);

// //  arrow function syntax 

// // const upperCaseCities = cityData.map(item => item.city.toUpperCase());

// // console.log(upperCaseCities);

// const upperCaseCities = [];

// for(let i = 0; i < cityData.length; i++){
//   upperCaseCities.push(cityData[i].city.toUpperCase());
// }
// console.log(upperCaseCities);

const cityData = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];
//   // .filter();
// // returns a new array automatically 
// // filters results to the new array based on something that could be true or false 
// //needs a return statement

// // const bigPops = cityData.filter(function(item){
// //   // if this is true it will be included in the new array, if its false it wont be
// //   return item.population > 500000;
// // });

// // console.log(bigPops);

// // const bigPopCities = bigPops.map(function(item){
// //   return item.city;
// // });
// // console.log(bigPopCities);


// // arrow function 
const bigPops = cityData.filter(item => item.population > 500000);
const bigPopCities = bigPops.map(item => item.city);
console.log(bigPops);
console.log(bigPopCities);



// const cityData = [
//     {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
//     {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
//     {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
//     {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
//   ];
  
  //.reduce()
  // returns a single value not an array 
  // takes 2 arguments - the first is accumulator or running total, the second is the current value 
  // usually used for sums or products
  // inital value - where the equation starts / usually 1 for * and 0 for +
  // needs a return
  
  
  const totalLandArea = cityData.reduce(function(x, y){
    return x + y.land_area;
  },0);
  
  console.log(`I am the total Land area ${totalLandArea}`);
  
  