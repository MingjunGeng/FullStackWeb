console.log("test1");

// REVIEW

// a list of stuff where the order matters
const arr = [1, 2, 3, 4, 5];

// accessing arrays
// index
arr[arr.length - 1];
arr[4];
console.log(arr[4]);
// array methods
// .map, .filter, .reduce
// foreach loops
const mappedArr = arr.map((num, index, array) => {
  // console.log(num);
  // console.log(index);
  // console.log(array);
  
  return num;
});

console.log(mappedArr);