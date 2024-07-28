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
  // once all elements have been evaluated return the empty array so undefined is not concated at the end.
  if (arr.length === 0) {
    return arr;
  }

  // if the element is a number
  if (typeof arr[0] === "number") {
    // adds the first element in if it is a number and then concats the rest of the array on once base case is met. Then all chained element are satisfied and returned at this return statement.
    return arr.slice(0, 1).concat(flatten(arr.slice(1)));
  } else {
    // if the element is an array plug the entire index into flatten to evaluate and add its elements to the parent array. This is done because if the sub arrays first element is a number the if statement if(typeof arr[0] === number) will be true which will concat it into the chained value that will be returned by the first function call.
    // if this condtional is false it will run this else condition again and pass another array in to be evaluated by if(typeof arr[0] === number). The arr.slice(1) moves up the index each time until the base case is satisfied.
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
};

// console.log(flatten([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
