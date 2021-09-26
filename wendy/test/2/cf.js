//1
// function calculateBill() {
//     // this is a function body
//     console.log("Running Calculate Bill!!!");
//     const total = 100 * 1.13;
//     console.log(total);
//     }
//     // console.log(total);
// calculateBill();


//2
// let bill = 100;
// const taxRate = 0.13;
// function calculateBill() {
// //   console.log("Running calculate bill!!");
//   const total = bill * taxRate;
//   return total;
// }
// const myTotal = calculateBill();
// bill = 200;
// const myTotal2 = calculateBill();
// console.log(myTotal, myTotal2);

//3
//function definition
// function calculateBill(billAmount, taxRate) {
//     // this is the function body
//     console.log("Running Calculate Bill!!");
//     // console.log(billAmount * (1.13));
//     const total = billAmount * (1 + taxRate);
//     return total;
//   }
//   let myTotal = calculateBill(100, 0.15);
//   console.log(myTotal);
//   myTotal = calculateBill(200, 0.13);
//   console.log(myTotal);
//   let myTotal3= calculateBill(20+20+30+20, 0.15);
//   console.log(myTotal3);
//   const kaita = 100;
//   const myTotal3 = calculateBill(kaita + 50, 0.15);
//   console.log(myTotal3);

//4
// const firstName = "wes";
// function sayHiTo () {
//     return `Hello ${firstName}`;
//   }
//   const greeting = sayHiTo();
//   console.log(greeting);

//5
// const firstName = "wes";
// function sayHiTo (firstName) {
//   return `Hello ${firstName}`;
// }
// const greeting = sayHiTo("Wes");
// console.log(greeting);

//6
// function doctorize(name) {
//     return `Dr. ${name}`;
// }
// function yell(name = "Silly Goose") {
//     return `HEY ${name.toUpperCase()}`;
//   }

//7
// function definition
// function calculateBill(billAmount, taxRate = 0.13) {
//     // this is the function body
//     console.log("Running Calculate Bill!!");
//     const total = billAmount * (1 + taxRate);
//     return total;
//   }


//8
// function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log("Running Calculate Bill!!");
    const total = (billAmount * (1*100 + taxRate*100+ tipRate*100))/100;
    return total;
  }