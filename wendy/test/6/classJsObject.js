console.log('HHHHH');

// Objects 
// another fundamental building block of JS 
// allows us to group together properties and values or key/value pairs 
// the order doesn't matter 
// it give us the ability to create methods - which are functions that belong to an object - DO NOT USE ARROW FUNCTIONS
// used for collections of data 

// anatomy of an object 

// const dog = {
//   // key value pairs 
//   name: 'Ada',
//   breed: 'Bali Dog',
//   age: 4,
//   colour: 'brindle',
//   favFood: 'Salmon',
//   // methods
//   eat: function(){
//     return `${this.name} is a ${this.breed} and their favourite food is ${this.favFood}`;
//   }
// }

// // dot notation
// console.log(dog.name);
// // bracket notation - we have to use this if our keys are strings with spaces in them
// console.log(dog['name']);

// //invoke the eat function
// console.log(dog.eat());

// This keyword in javaScript 

// window binding 
// if none of the other rules apply this will return the window, the global object in node or undefined in strict mode 

// implicit binding 
// applies to objects with methods, its about 80% of use cases and it says when the function is invoked, look to the left of the dot, that's what 'this refers to'


//2
// const places = [
//   {city: 'Toronto', country: 'Canada', region: 'North America'},
//   {city: 'Portland', country: 'USA', region: 'North America'},
//   {city: 'Tokyo', country: 'Japan', region: 'Asia'},
//   {city: 'Cairo', country: 'Egypt', region: 'North Africa'},
//   {city: 'Rio', country: 'Brazil', region: 'South America'},
//   {city: 'Talouse', country: 'France', region: 'Europe'},
//   {city: 'Moscow', country: 'Russia', region: 'Europe'},
//   {city: 'Manila', country: 'Philippines', region: 'Asia'},
// ];

// console.log(places);
// const europe = [];

// for(let i=0; i<places.length; i++){
//   if(places[i].region == 'Europe'){
//     europe.push(places[i].city);
//   }
// }
// console.log(europe);

// function checkRegion(array, region) {
//   const newArray = [];
//   for (let i =  0; i < array.length; i++) {
//     if (array[i].region === region) {
//       newArray.push(array[i].city);
//     }    
//   }
//   return newArray;
// }
// console.log(checkRegion(places, 'North Africa'));
// console.log(checkRegion(places, 'Europe'));


// const dog = {
//   // key value pairs 
//   'name': 'Ada',
//   'breed': 'Bali Dog',
//   'age': 4,
//   'colour': 'brindle',
//   'fav Food': 'Salmon',
//   // methods
//   eat: function(){
//     return `${this.name} is a ${this.breed} and their favourite food is ${this['fav Food']}`;
//   }
// }
// console.log(dog['fav Food']);
// console.log(dog.name);

// function createMenuItem(name , price, category){
//   /*Your code here*/
//   return {name, price, category};
// }
// console.log(createMenuItem('tacos', 8, 'Lunch'));

function createMenuItem(strName , numPrice, strCategory){
  /*Your code here*/
  return {name: strName, price: numPrice, category: strCategory};
}
console.log(createMenuItem('tacos', 8, 'Lunch'));

const lunchTacos =  createMenuItem('tacos', 8, 'Lunch');
const lunchPizza =  createMenuItem("pizza",5,"lunch");
const dinnerSandwich =  createMenuItem("sandwich",9,"dinner");
console.log(lunchTacos);
console.log(lunchPizza);
console.log(dinnerSandwich);


const burger = {
  name: "Burger", 
  price: 18, 
  category: "Lunch", 
  discount: function(position){
     if(position==='teacher'|| position==='student'){
      return price = this.price * 0.75;
     }else if( position==='public' ) {
      return price = this.price * 0.9;
     }else {
      return this.price;
     }
  }
}

console.log(burger.discount('teacher'));
console.log(burger.discount('student'));
console.log(burger.discount('public'));

const reviews = [
  {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
  {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
  {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
  {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
  {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
  {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
  {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
  {name: "Reyna", rating: 3.5, feedback: ""},
]

//console.log(reviews[Julius]);

// for (let i = 0; i < reviews.length; i++) {
//   if(reviews[i].name==='Julius'){

//     console.log(reviews[i].feedback);
//   }
  
// }
// reviews[7].feedback = 'this place is chill with really cool people, great for getting work done on weekdays';
//  console.log(reviews);


// function createReviewItem(name , rating, review){
//   /*Your code here*/
//   return {name, rating, review};
// }
// const arrobj = [{}];

// console.log(reviews);

// function addReview(array){
//   /*Your Code Here */
//   //let newarr = [];
//   //newarr[newarr.length] = {name: 'Daniela', rating: 5, review: 'Beautiful atmosphere and wonderful vegan options!' };
//   for (let i = 0; i < array.length; i++) {
//     array[i].review = array[i].feedback; 
//     delete array[i].feedback;
//     // newarr[i].review = array[i].feedback; 
//     // newarr[i].rating = array[i].rating; 
//     // newarr[i].name = array[i].name; 
//  }
//  array[array.length] = {name: 'Daniela', rating: 5, review: 'Beautiful atmosphere and wonderful vegan options!' };
//   return array;
// }
// //const arr = []; 
// console.log(addReview(reviews));

// function addReview(array){
//   /*Your Code Here */
//   let newarr = [];
//   newarr[newarr.length] = {name: 'Daniela', rating: 5, review: 'Beautiful atmosphere and wonderful vegan options!' };
// //   for (let i = 0; i < array.length; i++) {
// //     array[i].review = array[i].feedback; 
// //     delete array[i].feedback;
// //     // newarr[i].review = array[i].feedback; 
// //     // newarr[i].rating = array[i].rating; 
// //     // newarr[i].name = array[i].name; 
// //  }
//  //array[array.length] = {name: 'Daniela', rating: 5, feedback: 'Beautiful atmosphere and wonderful vegan options!' };
//   return array;
// }
//const arr = []; 
function addReview(reviews, name, rating, feedback){

  reviews[reviews.length] = {name, rating, feedback };
return reviews;
}
console.log(addReview( addReview(reviews, 'Daniela', 5, 'great eats!')) );



function getReviewByIndex(reviews, num) {
  /*Your code here*/
  //return ;
  return `${reviews[num].name} gave the restaurant a ${reviews[num].rating} star review, and their feedback was: ${reviews[num].feedback}`;
}
console.log(getReviewByIndex(reviews,0));




function getLastReview(reviews) {
  /*Your code here*/
  let l = 0;
  for (let i = 0; i< reviews.length; i++) {
        if (reviews[i].name) {
          l = i;
        }
      }
  console.log(l);
  return `${reviews[8].name} gave the restaurant a ${reviews[1].rating} star review, and their feedback was: ${reviews[1].feedback}`;
} 
console.log(getLastReview(reviews));//




  function sumWord(array){
    /*code here*/
    let arr = [];
    let sum =0;
    for(let i=0; i<array.length; i++){
        arr[i]=0;
      for(let j=0, n=0; j < array[i].length; j++){
        if(array[i][j]===' ') {
            n++;
            arr[i]=n;
        }
      }
      sum = sum +arr[i];
    }
    return sum+1;
  }
 // console.log(sumWord("fun trivia and cool vibes"));

//console.log(numWord("fun trivia and cool vibes"));

function getReviewByRating(array, rating) {
  /* code here */
  let newarr = [];
  let s;
  for (let i = 0; i < array.length; i++) {
    if(s!=""){
      s=array[i].feedback;
      num = sumWord(s);
      if(num>=15){
        // console.log( num);
        newarr.push(array[i]);

      }
    }
    
  }
  return newarr;
}
console.log(getReviewByRating(reviews, 4));

// //last
// const car = {
//   name: "prius",
//   type: "Hybrid",
//   year: 2021,

// }

// function carMaker(miles) {
//     /* code here */
//     car.drive = function (m){
//       return m+10;
//     }
//     return car.drive(miles);
// }
// console.log(carMaker(100));

//last
const car = {
  name: "prius",
  type: "Hybrid",
  year: 2021,
  drive: function (m){
    return m+10;
  }
}

function carMaker(miles) {
    /* code here */
  
    return car.drive(miles);
}
console.log(carMaker(100));