

export function sum(a, b){
    return a+b;
}

export function multiply(a, b){
    return a*b;
}
export const profession = 'Web Developer!!!!'

// /**  Method 4 (import) */
// // export default function () {
// //     return 'Hello from the utils module';
// // }
// export default function gogo() {
//     return 'Hello from the utils module';
// }
/**  Method 5 (import) */
export default {
    sum, multiply, profession
}