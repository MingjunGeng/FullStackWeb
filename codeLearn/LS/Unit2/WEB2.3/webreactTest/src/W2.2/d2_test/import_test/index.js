
// function sum(a, b){
//   return a+b;
// }

/**  Method 1 (import) */
// import { sum } from './utils';
// import { multiply } from './utils';
/**  Method 2 (import) */
// import { sum, multiply, profession } from './utils';
// import utils from './utils';
/**  Method 3 (import) */
//import utils, { sum, multiply, profession } from './utils';
// console.log(sum(2,5));
// console.log(multiply(2,5));
// console.log(profession);
// console.log(utils());
// /**  Method 4 (import) */
// import whatever, { sum, multiply, profession } from './utils';
// console.log(sum(2,5));
// console.log(multiply(2,5));
// console.log(profession);
// console.log(whatever());

/**  Method 5 (import) */
import utils from './utils';
console.log(utils.sum(2,5));
console.log(utils.multiply(2,5));
console.log(utils.profession);
console.log(utils);