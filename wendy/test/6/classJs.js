console.log('HHHHH');

  const cities = ['Orlando', 'Chicago', 'Gainesville', 'Nashua'];
//   console.log(cities);
//   console.log(cities[0]);
//   console.log(cities.length);
//   console.log(cities[cities.length - 1]);

//   const exampleFunction = (arr) => {
//     return arr.length;
//   };
//   console.log(exampleFunction(cities));
//   const numbers = [1,2,3,4,5,6,7,8,9,10];
// const numbersBackwards = numbers.reverse();
// console.log(numbers);
// console.log(numbersBackwards);
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const numbersBackwards = numbers;
// console.log(numbers);
// console.log(numbersBackwards);

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const someNums = numbers.slice(0, numbers.length);
// const someNumsSliced = numbers.slice(0, 2);
// console.log(someNums);
// console.log(someNumsSliced);

// const backwardNumbers = [...numbers];
// console.log(backwardNumbers);
// // const backwardNumbers = [...numbers];
// console.log(backwardNumbers);
// backwardNumbers.reverse();
// console.log(numbers);
// console.log(backwardNumbers);

// const cities = ['Orlando', 'Chicago', 'Gainesville', 'Nashua'];

// console.log(cities);
// // add items to the beginning
// cities.unshift('Daytona');

// // add items to the end
// cities.push('Tallahassee');
// console.log(cities);

const myfavourCity = ["Orlando","Chicago","Gainesville","Nashua"];
myfavourCity.unshift('Beijing');
// const newCity = [...myfavourCity];
console.log(myfavourCity);
// console.log(newCity);


// .includes
// const cities = ['Orlando', 'Chicago', 'Gainesville', 'Nashua'];
// if(cities[0].includes('Orlando')) {
//   console.log('It includes Orlando!');
// } else {
//   console.log('It does not include Orlando!');
// }

// const apples = ['Golden Delicious', 'Red Delicious', 'Gala', 'Macintosh', 'Fuji'];

// for (let i = 0; i < apples.length; i++) {
//   console.log(`index ${i}`, apples[i].includes('Delicious'));
// }

// BREAKOUT
// write a function to find if any apples include the string 'Red' and if they do, return the value (name of the apple/index of the array)
// const apples = ['Golden Delicious', 'Red Delicious', 'Gala', 'Macintosh', 'Fuji', 'PaulaRed', 'Redfree', 'IdaRed'];

// // for (let i = 0; i < apples.length; i++) {
// //   console.log(`index ${i}`, apples[i].includes('Delicious'));
// //}
// function findRed(color){
//     // for (let i = 0; i < apples.length; i++) {
//     //   console.log(`index ${i}`, apples[i].includes('Red'));
//     // }
//     for(let i=0; i<apples.length; i++){
//         // if( apples[i].includes('Delicious')){ return i;}
//          console.log(`index ${i}`, apples[i].includes('Red'));   
//     }
// //     return null;
//  }
// console.log(findRed('Red'));

/* 👀 This is your data ⬇ */
const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
  ]

//   originalFlavors.pop();
//   originalFlavors.unshift


console.log([originalFlavors.splice(0, 1)][0][0]);

function is31Flavors(array){
    /*your code here*/
    return array.length === 31;
   }
   console.log(is31Flavors(originalFlavors));

// // originalFlavors.unshift("oooooo");
// console.log(originalFlavors);
//    function addFlavor(array,  str){
//     /*your code here*/
//     array.unshift(str);
//      return console.log(array);
//    }
//    addFlavor(originalFlavors,  "Rainbow Sherbert")
// //    console.log(addFlavor(originalFlavors,  "Rainbow Sherbert"));


// function removeLastFlavor(array){
//     /*your code here*/
//     // array.splice(array.length-1, 1);
//     //  return array;
//     return array.pop()?array:null;
//    }
//    console.log(removeLastFlavor(originalFlavors));

//    function getFlavorByIndex(array, num){
//     /*your code here*/
//     // return array[num];
//     array.splice(num, 1)
//     return  array;
//   }
//   console.log(getFlavorByIndex(originalFlavors, 2));

//   function removeFlavorByName(array,  str){
//     /*your code here*/
//     for(let i=0; i< array.length; i++){
//       if(array[i]===str){
//         array.splice(i, 1);
//         i--;
//       }
//     }
//     return array;
//   }
//   console.log(removeFlavorByName(originalFlavors, "Rocky Road"));



// function filterByWord(array,  str){
//     /*your code here*/
//     let length = array.length;
//     let arr = [];
//     for(let i=0, j=0; i< array.length; i++){
//       if(array[i].includes(str)){
//           console.log(i+" " +array[i]);
//         // array.splice(i,1);
//         // length--;
//         arr[j]=array[i];
//         j++;
//       }
//     }
//     console.log(`length == ${length}`);
//     return arr;
//   }
//   console.log( filterByWord(originalFlavors, "Chocolate") );

console.log('HHHHH');

// const original = [
//     "Banana Nut Fudge",
//     "Almond",
//     "Vanilla Burnt Almond"
// ];


// function getAverageWordLength(array){
//     /*code here*/
//     let arr = [];
//     let sum =0;
//     for(let i=0; i<array.length; i++){
//         arr[i]=0;
//         // console.log(i +" "+array[i].length);
//       for(let j=0, n=0; j < array[i].length; j++){
          
//           //console.log(i +" "+array[i][j]);
//         if(array[i][j]===' ') {
//             //console.log(i +" ccccc    "+array[i][j]);
//             n++;
//             arr[i]=n;
//             console.log("#"+i+" " +arr[i])
//         }
//       }
//       sum = sum +arr[i];
//     }
//     // for(let i=0; i<arr.length; i++){
//     //     sum = sum +arr[i];
//     // }
//     console.log(`sum = ${sum}, Ave = ${sum/array.length} = ${Math.floor(sum/array.length)}`);
//     // return arr;
//     return Math.floor(sum/array.length);
//   }
//   console.log(getAverageWordLength(original));
//   console.log(getAverageWordLength(originalFlavors));
//   function getAverageWordLength(array){
//     /*code here*/
//     let arr = [];
//     let sum =0;
//     for(let i=0; i<array.length; i++){
//         arr[i]=0;
//       for(let j=0, n=0; j < array[i].length; j++){
//         if(array[i][j]===' ') {
//             n++;
//             arr[i]=n;
//         }
//       }
//       sum = sum +arr[i];
//     }
//     return sum/array.length;
//   }
//   console.log(getAverageWordLength(originalFlavors));

const a1 = [
    "11",
    "aaa"
];
const a2 = [
    "22",
    "bbb"
];
const a3 = [
    "33",
    "ccc"
];
const a4 = [
    "44",
    "ddd"
];


// function getRandomFlavors(array1, array2, array3, array4){
//     /*code here*/
//     let arr = [...array1, ...array2, ...array3, ...array4];
//     let newarr = [];
//     let randomNum = Math.floor(Math.random() * (newarr.length) );
//     for(let i=0, l = arr.length; i < 6; i++, l--){
//         let r = Math.floor(Math.random() * (l) );
        
//         //newarr[i] = arr[r];
//         newarr[i] = [arr.splice(r, 1)][0][0];
//         console.log(`r=${r} arr[${r}] = ${arr[r]}`);
//     }

//     return newarr;
//   }
  console.log( getRandomFlavors(a1, a2, a3, a4));




function getRandomFlavors(array1, array2, array3, array4){
    /*code here*/
    let arr = [...array1, ...array2, ...array3, ...array4];
    let newarr = [];
    for(let i=0; i < 6; i++){
        let r = Math.floor(Math.random() * (arr.length) );   
        newarr[i] = [arr.splice(r, 1)][0][0];
    }
    return newarr;
  }
  const newFlavors = [
    "Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"
  ] 
  
  const seasonalFlavors = [
    "America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango"
  ]
  
  const regionalFlavors = [
    "Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"
  ]




  console.log( getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors));
  



  let letters = ['a', 'b', 'c', 'd', 'c', 'b', 'a'];
  let uniqueLetter = Array.from(new Set(letters));
  console.log(uniqueLetter);  // ['a', 'b', 'c', 'd']
  let uniqueLetter1 = [...new Set(letters)];
  console.log(uniqueLetter1);  // ['a', 'b', 'c', 'd']

letters = [['a', 'b',] ['c', 'd', 'e']];
console.log([['a', 'b',] ['c', 'd', 'e']]);