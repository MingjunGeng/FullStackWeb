console.log("test 2.js");

function processFirstItem(stringList, callback) {
    return callback(stringList[1])
  }
  console.log(processFirstItem(['foo','bar'],function(str){return str+str}));
  
//   function score(){
//     return Math.floor(Math.random() * 3);
//   }
//   console.log(score());

function inning(/*Code Here*/){
    /*Code Here*/
    return Math.floor(Math.random() * 3);
}



function finalScore(inning, playedNum){
    /*Code Here*/
    let homeScore = 0;
    let awayScore = 0;
    for (let i = 0; i < playedNum ; i++) {
      homeScore = homeScore + inning();
      awayScore = awayScore + inning();
    }
      return  {
        "Home": homeScore,
        "Away": awayScore
      };
  }

  console.log(finalScore(inning, 9));

  function getInningScore(inning) {
    /*Your Code Here */

    return {
        "Home": inning(),
        "Away": inning()
    };
  }
//   console.log(getInningScore(inning));

  function scoreboard(getInningScore, inning, playedNum) {
    /* CODE HERE */
    const totalScore = [];
    let homeScore = 0;
    let awayScore = 0;
    let n =0;
    for (let i = 0; i < playedNum ; i++) {
        const currentScore = getInningScore(inning);
        totalScore.push(`Inning ${i + 1}: Away ${currentScore.Away} - Home: ${currentScore.Home}`);
        homeScore = homeScore + currentScore.Home;
        awayScore = awayScore + currentScore.Away;
        //totalScore.push(`Inning ${i + 1}: Away ${awayScore} - Home: ${homeScore}`);
      }
      if(homeScore === awayScore){
        totalScore.push(`This game will require extra innings: Away ${awayScore} - Home: ${homeScore}`);
      }else{
        totalScore.push(`Final Score: Away ${awayScore} - Home: ${homeScore}`);
      }
      
      return totalScore;
  }

  console.log(scoreboard(getInningScore, inning, 9));




  function score(){
    return Math.floor(Math.random() * 6);
  }
  
  
  
//   // create a hockey game function that takes score as a callback and returns a score for a home team and away team in the form of an object 
//   function hockeyGame(scorecb){
//     return {
//       Home: scorecb(),
//       Away: scorecb()
//     }
//   }
  
//  console.log(hockeyGame(score)); // line 162 in the function below

//   // create a function called totalGameScore - it should take score and hockeyGame as callbacks and it should return an array with the score for each period as a string `Period #: Away: score - Home: score`

// function totalGameScore(scorecb, gamecb){
//     // first step 
//     const totalScore = [];
//     // I'm going to create some variables that will be updated 
//     let homeScore = 0;
//     let awayScore = 0;
//     // create a loop that loops for each period of the game when it loops it's going to add a score for home and away for that period to the array
//     for(let i = 0; i < 3; i++){
//       // invoking hockeyGame on this line and that's going to give me an object with a score for home and a score for away 
//       const currentScore = gamecb(scorecb);
//       // updating my variables from lines 157 and 158
//       homeScore = homeScore + currentScore.Home; // .Home and .Away is how I am grabing the score value from the object that's returned when I invoke the hockeyGame on line 162
//       awayScore = awayScore + currentScore.Away; 
//       // push these scores into an array in the form of a string
//       totalScore.push(`Period ${i + 1}: Away ${awayScore} - Home: ${homeScore}`);
//     }
//     // outside of the loop I want the array back 
//     return totalScore;
//   }
  
//   console.log(totalGameScore(score, hockeyGame));