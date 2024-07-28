// Understand the problem
/*
Redefine
Inputs
Outputs
Can outputs be determined by inputs?
How should I label critical pieces of data?
*/
// Examples
/*
Simple: productOfArray(2, 4, 6) // 48
Complex: productOfArray([1.5, 2, 3]) // 9
Invalid: productOfArray("ddaqwdasdaf") // undefined
Empty: productOfArray() // 0
*/
// Problem
/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

// Break it down
const productOfArray = (arr) => {
  // when arr length = 0 return 1. This is the base case and will not change the product since it is multiplying by 1
  if (arr.length === 0) return 1;

  // create value called product set equal to 1
  // multiply product by arr[0]
  // set product equal to product times productOfArray(arr.slice(1))
  // return product
  return arr[0] * productOfArray(arr.slice(1));
};
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
