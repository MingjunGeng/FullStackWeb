const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
// const final2014 =  fifaData.filter(function(item){
//     return item.Year === 2014;
// })
const final2014 =  fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
})
console.log(final2014);

//(a) Home Team name for 2014 world cup final

console.log("1a", final2014[0]["Home Team Name"]);


//(b) Away Team name for 2014 world cup final

console.log("1b", final2014[0]["Away Team Name"]);



//(c) Home Team goals for 2014 world cup final

console.log("1c", final2014[0]["Home Team Goals"]);



//(d) Away Team goals for 2014 world cup final

console.log("1d", final2014[0]["Away Team Goals"]);



//(e) Winner of 2014 world cup final */


console.log("1d", final2014[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following: 
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(fifaData) {
    /* code here */
    return fifaData.filter(item => item.Stage === 'Final');
 }
 console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// function getYears(array) {
//     /* code here */
// }
function getYears(array) {
    /* code here */
    let newArr = [];
    array.forEach( (item) =>newArr.push(item.Year) );
    return newArr;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

// function getWinners(/* code here */) {
//     /* code here */
// }
function getWinners(array) {
    /* code here */
    let newArr = [];
    array.forEach(function (item) {
        // console.log(item.Year);
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            newArr.push(item["Home Team Name"]);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            newArr.push(item["Away Team Name"]);
        }
    });
    return newArr;
}
console.log(getWinners(getFinals(fifaData)  ));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// function getWinnersByYear(/* code here */) {
//     /* code here */
// }

function getWinnersByYear(array) {
    /* code here */
    let newArr = [];
    array.forEach(function (item) {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            newArr.push(`In ${item["Year"]}, ${item["Home Team Name"]} won the world cup!`);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            newArr.push(`In ${item["Year"]}, ${item["Away Team Name"]} won the world cup!`);
        }
    });
    return newArr;
}
console.log(getWinnersByYear(getFinals(fifaData)  ));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

// function getAverageGoals(/* code here */) {
//    /* code here */
// }
function getAverageGoals(array) {
    /* code here */
    let homeScore =0;
    homeScore = array.reduce(function(x, y){
        return x + y["Home Team Goals"];
      },0);
    let awayScore = 0;
    awayScore = array.reduce(function(x, y){
        return x + y["Away Team Goals"];
      },0);
    return `${Math.round((homeScore+awayScore)*100/19)/100}`;
 }



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(/* code here */) {

//     /* code here */

// }
function getWin(fifaData, teamInit) {
    /* code here */
    let newArr = [];
    const countryWin =  fifaData.filter(item => (item["Home Team Initials"] === teamInit ) ||  (item["Away Team Initials"] === teamInit ));
 
    countryWin.forEach(function (item) {
        // console.log(item.Year);
        if( (item["Home Team Goals"] > item["Away Team Goals"])  && (item["Home Team Initials"] === teamInit )   ){
            newArr.push("Home");
        }else if( (item["Away Team Goals"] > item["Home Team Goals"])  && (item["Away Team Initials"] === teamInit )  ){
            newArr.push("Away");
        }
    });
    let sum = newArr.reduce(function(p, c) {
         return p + 1;
        }, 0);
        return sum;
    // return newArr;
}

 console.log(getWin(fifaData, "HUN"));



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// }

function badDefense(fifaData) {
    /* code here */
    let arr = [];
    let newArray = getFinals(fifaData);
    newArray.forEach(function (iteam) {
        //console.log(iteam.Attendance);
        arr.push(iteam.Attendance);
    }

    );
    // let arr = newArray.Attendance.
    return Math.min(...arr);

} 
console.log(badDefense(fifaData));

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
