//1
// function doctorize(firstName) {
//     return `Dr ${firstName}`;
// }

//2
// const doctorize = function (firstName) {
//     return `Dr ${firstName}`;
// }

//3
// doctorize2("wes");
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };
// function doctorize2 (firstName) {
//   return `Dr. ${firstName}`;
// }

//4
// (function (){
//     console.log('Running the Anon function');
//     return `You are cool`;
//   })();

//5
// (function (age) {
//     console.log("Running the Anon function");
//     return `Your are cool and ${age}`;
//   })();

//6
const wes = {
    name: 'Westopher Bos',
    // Method!
    sayHi: function sayHi() {
      console.log(`Hey ${this.name}`);
      console.log('Hey Wes!');
      return 'Hey Wes!';
    }
};

//7
// const button = document.querySelector(".clickMe");
// console.log(button);

//8
const button = document.querySelector(".clickMe");
button.addEventListener("click", wes.sayHi);