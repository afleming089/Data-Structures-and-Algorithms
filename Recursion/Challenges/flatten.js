// Understand the problem
/*
Restate:
Remove all element from subarray and put them all in the parent array.

Inputs:
An array that can contain many different types of data structures.

Outputs:
A simplified array with all data points being chars. No objects or arrays in the parent array.

Can the output be determined based on the inputs?
Yes. We need to move all of the data to the top level of the array. No data can be in a subarray.

How should I label critical pieces of data?
The input array can be called arr. We will mortify that array and put the updated data points on the end to avoid a o(n) space complexity. We will then return that array at the end of the function.
*/

// Examples
/*
Simple: flatten([[1]]) // [1]
Complex: flatten([2,[5,4,[354, 6, 4]], 4]) // [2, 5, 4, 354, 6, 4, 4]
Empty: flatten() // undefined
Invalid: flatten({num: 12}) // error
*/

// Problem
/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

// Break it down
const flatten = (arr) => {
  // if typeof is not a number then run through flatten until that array is cleared and return that result to the first in the stack.
  //if arr[0] is a num
  if (typeof arr[0] === "number") return arr[0] + flatten(arr.slice(1));
  // if arr[0] is not a num insert arr[0] as the array
  else return flatten(arr[0]);
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
