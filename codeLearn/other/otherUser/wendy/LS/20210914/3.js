console.log("GGGG");


// console.log(fifaData[);

// fifaData.forEach(function (item) {
//     console.log(item["Home Team Name"]);
// });

// const itemYear = fifaData.filter(function(item){
//     return item.Year === 2014;
// });
// console.log(itemYear);

// const itemHome = fifaData.filter(function(item){
//     return item.Year === 2014;
// })
// // console.log(itemHome["Home Team Name"]);
// console.log(itemHome);
// itemHome.forEach(function (item) {
//     // console.log(item.Datetime);
//     console.log(item["Home Team Name"]);
// });


// const final2014 =  fifaData.filter(function(item){
//     return item.Year === 2014;
// })
// //(a) Home Team name for 2014 world cup final
// final2014.forEach(function (item) {
//     // console.log(item.Datetime);
//     console.log(item["Home Team Name"]);
// });

// final2014.forEach(function (item) {
//     // console.log(item.Datetime);
//     console.log(item["Away Team Name"]);
// });

// final2014.forEach(function (item) {
//     // console.log(item.Datetime);
//     console.log(item["Home Team Goals"]);
// });

    // final2014.forEach(function (item) {
    //     // console.log(item.Datetime);
    //     console.log(item["Away Team Goals"]);
    // });

    // final2014.forEach(function (item) {
    //     // console.log(item.Datetime);
    //     console.log(item["Win conditions"]);
    // });

// const final2014 =  fifaData.filter(function(item){
//     return item.Year === 2014 && item.Stage === 'Final';
// });
// console.log(final2014);

// "Stage": "Final",






// function getFinals(fifaData) {
//     /* code here */
//     const final =  fifaData.filter(function(item){
//         return item.Stage === 'Final';
//     });
//     return final;
//  }
// function getFinals(fifaData) {
//     /* code here */
    
//     return fifaData.filter(function(item){
//         return item.Stage === 'Final';
//     });
//  }
const getFinals = function (fifaData) {
    /* code here */
    return fifaData.filter(item => item.Stage === 'Final');
 };
 console.log(getFinals(fifaData));
//console.log(getF);
//  function getYears(array) {
//     /* code here */
//    // console.log(array);
// //    return array[0]["Home Team Name"];
//     let newArr = [];
//     array.forEach(function (item) {
//         // console.log(item.Year);
//         newArr.push(item.Year);
//     });
//     return newArr;
// }
function getYears(array) {
    /* code here */
    let newArr = [];
    array.forEach( (item) =>newArr.push(item.Year) );
    return newArr;
}
console.log(getYears(getFinals(fifaData)  ));

//console.log(getF);


//  function getWinners(array) {
//     /* code here */
//    // console.log(array);
// //    return array[0]["Home Team Name"];
//     let newArr = [];
//     array.forEach(function (item) {
//         // console.log(item.Year);
//         if(item["Home Team Goals"] > item["Away Team Goals"]){
//             newArr.push(item["Home Team Name"]);
//         }else if(item["Home Team Goals"] < item["Away Team Goals"]){
//             newArr.push(item["Away Team Name"]);
//         }
//         //newArr.push(`Y: ${item.Year}`);
//     });
//     return newArr;
// }

function getWinners(array) {
    /* code here */
    let newArr = [];
    array.forEach(function (item) {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            newArr.push(item["Home Team Name"]);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            newArr.push(item["Away Team Name"]);
        }
    });
    return newArr;
}
console.log(getWinners(getFinals(fifaData)  ));

function getWinnersByYear(array) {
    /* code here */
    let newArr = [];
    array.forEach(function (item) {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            // newArr.push(item["Home Team Name"]);
            newArr.push(`In ${item["Year"]}, ${item["Home Team Name"]} won the world cup!`);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            newArr.push(`In ${item["Year"]}, ${item["Away Team Name"]} won the world cup!`);
        }
    });
    return newArr;
}
console.log(getWinnersByYear(getFinals(fifaData)  ));


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
console.log(getAverageGoals(getFinals(fifaData)));

// function getCountryWins(fifaData, teamInit){

//     return fifaData["Home Team Initials"] === teamInit;
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


 

 function getGoals(fifaData) {

    /* code here */ 
    let newArray = getFinals(fifaData);
    return getWinners(newArray);
}
console.log(getGoals(fifaData));

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


//  function getCountryWins(fifaData, teamInit) {
//     /* code here */
//     const couWin =  [];
    
//     // fifaData.filter(function(item){
//     //     return item.Stage === 'Final';
//     // });
//     

//     return newArr;
//     return couWin;
//  }


//  console.log(getCountryWins(fifaData, "HUN"));

// let arr = [1, 2, 3, 4, 5];
 
// // let sum = arr.reduce((p, c) => p + c, 10); // 25
// // 转成es5的写法即为：
// var sum = arr.reduce(function(p, c) {
// //  console.log(p);
//  return p + 1;
// }, 0);

// console.log(sum);

var arr = [1, 2, 3];
var max = Math.min(...arr);
console.log(max);

console.log('test test test');

// console.log(arr1.prototype);
// console.log(arr2.prototype);
