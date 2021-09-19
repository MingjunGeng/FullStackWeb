console.log("ffff");

// const dog = 'Ada'; // global

// function callDog(dog){
//   console.log(dog);
// }

// function puppy(){
//   const dog = 'Noa'; // function scoped
//   callDog('Fido');
// }

// puppy();

// function test(){
//     for(let i =0; i<5 ;i++){
//         const n = 3;
//         if(i==n){
//             console.log(`${i}kkkkk`);
//         }
//         let i = 'hh';
//         console.log(`i===${i}`);
//     }
    
//  var hi = "dog is cute!";
// }
// test();
//console.log(hi);



// function country(countryName){
//     const lang1 = 'French';
//     const lang2 = 'English';
//     console.log(`${lang1} and ${lang2} are the official languages of ${countryName}`);
//     debugger;
//     function province(provName){
//       const food = 'maple syrup';
//       console.log(`${lang1} and ${lang2} are the official languages of ${countryName} the offical food is ${food} and the province with the biggest population is ${provName}`);
//       debugger;
//       function city(cityName){
//         console.log(`${cityName} is the capital of ${provName} but not the capital of ${countryName}`);
//         debugger;
//       }// this closes the city function 
//       city('Toronto');
//     }// this closes the function of province
//     province('Ontario');
//   }// this closes the function of country
//   country('Canada');

// function score(){
//     return Math.floor(Math.random()*5);
//   }
//   console.log(score());

function game(sport){
    let score = 0; 
    return function win(){
      score ++;
      return `Your ${sport} game score is ${score}`;
    }
  }
  
  // where are my closures happening?
  
  // create a game 
  
//   const hockeyGame = game('hockey');
  
//   console.log(hockeyGame());
//   console.log(hockeyGame());
  
//   const tennis = game('tennis');
  
//   console.log(tennis());
//   console.log(tennis());
//   console.log(tennis());


//   function game1 (){
//       let score = 0;
//       return function win(){
//         score++;
//         // return console.log(score);
//         return score;
//       };
//   }
// const g1test = game1();
//   game1();
//   game1();
//   console.log(g1test());
//   console.log(g1test());



//2
// function kitchen(ing1, ing2, chefcb){
//     return chefcb(ing1, ing2);
//   }
  
//   // callback functions
  
//   function pastaChef(ing1, ing2){
//     return `I took ${ing1} and ${ing2} and I made you a 🍝 - 👩‍🍳`;
//   }
  
//   function pizzaChef(ing1, ing2){
//      return `I took ${ing1} and ${ing2} and I made you a 🍕 - 👩‍🍳`;
//   }
  
//   console.log(kitchen('sauce', 'dough', pizzaChef));
  
//   console.log(kitchen('sauce', 'dough', pastaChef));


//3
// function totalGameScore(score1, score2, hockeyGame){
//     return `The first ${score1} and  sencond ${score2}`;
// }

// function lgame(score1, score2) {
//     return ` ${score1}  <= ${score2}`;
// }
// function hgame(score1, score2) {
//     return ` ${score1}  >= ${score2}`;
// }
// console.log(lgame(5, 9));
// console.log(hgame(11, 9));



// create a score function that will return a random number between 0 and 5

function score(){
    return Math.floor(Math.random() * 6);
  }
  
  
  
  // create a hockey game function that takes score as a callback and returns a score for a home team and away team in the form of an object 
  function hockeyGame(scorecb){
    return {
      Home: scorecb(),
      Away: scorecb()
    }
  }
  
 console.log(hockeyGame(score)); // line 162 in the function below

  // create a function called totalGameScore - it should take score and hockeyGame as callbacks and it should return an array with the score for each period as a string `Period #: Away: score - Home: score`

function totalGameScore(scorecb, gamecb){
    // first step 
    const totalScore = [];
    // I'm going to create some variables that will be updated 
    let homeScore = 0;
    let awayScore = 0;
    // create a loop that loops for each period of the game when it loops it's going to add a score for home and away for that period to the array
    for(let i = 0; i < 3; i++){
      // invoking hockeyGame on this line and that's going to give me an object with a score for home and a score for away 
      const currentScore = gamecb(scorecb);
      // updating my variables from lines 157 and 158
      homeScore = homeScore + currentScore.Home; // .Home and .Away is how I am grabing the score value from the object that's returned when I invoke the hockeyGame on line 162
      awayScore = awayScore + currentScore.Away; 
      // push these scores into an array in the form of a string
      totalScore.push(`Period ${i + 1}: Away ${awayScore} - Home: ${homeScore}`);
    }
    // outside of the loop I want the array back 
    return totalScore;
  }
  
  console.log(totalGameScore(score, hockeyGame));