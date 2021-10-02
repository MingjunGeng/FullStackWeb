console.log("In Class Practise 10");

// let menuItems = [
//   'Students',
//   'Faculty',
//   "What's New",
//   'Tech Trends',
//   'Music',
//   'Log Out'
// ];
// for(let i=0; i< menuItems.length; i++){
//   // console.log(i);
//   console.log(menuItems[i]);
// }

// no work
// const asyncFunction = () => {
//   return new Promise((resolve, reject) => {
//     //
//     if(asyncFunctionSuccessfully){
//       resolve(dataObject);
//     } else {
//       reject(errorMessage);
//     }
//   });
// };
// asyncFunction()
// .then((dataPassFromResolve) => {
//   console.log("async stuff finished");
// })
// .catch((errorPassedFromResolve) => {
//   console.log("async stuff rejected");
// });


let time = 0;
const timeMachine = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( (time += 1000) );
    }, 1000);
  });
};
// m1 //
// timeMachine().then(newTime => {
//   console.log(newTime);
// });
// //m2 //
timeMachine()
  .then(newTime => {
    console.log(newTime);
    //const myTime = newTime /1000;
    //return `${myTime} seconds have passed`;
  })
  .then(newString => {
    newString = 50
    console.log(newString);
  });

// m3 //
// const timeMachine = time => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(time>=1000) {
//         resolve( time );
//       }else{
//         reject(time)
//       }
//     }, time);
//   });
// };
// timeMachine(999)//999 2000
//   .then(newTime => {
//     // console.log(newTime);
//     const myTime = newTime /1000;
//     console.log(`${myTime} seconds have passed`) ;
//   })
//   .catch((err) => {
//     console.log(err);
//   })