// Understand the problem
/*
Restate:
The function will take an array and a callback function. If anything in the function is true based on the callback return true else return false.

Inputs:
An array and a call back function.

Outputs:
True or false.

Can outputs be found based on inputs:
Yes but it depends on what the call back function is. If a element in the array meets the conditions in the call back function then the parent function will return true. Otherwise it returns false.

How should I label critical pieces of data:
The array can be called arr. The callback can be called callback.
*/

// Examples
/*
Simple: someRecursive([1], isOdd) // true

Complex: someRecursive([2, 4, 6], isOdd) // true

Empty: someRecursive([], isOdd) // false

Invalid: someRecursive([a, d], isOdd) // false

*/
// Problem
/*
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/

// Break it down

const someRecursive = (arr, callback) => {
  // base case for whenever array is empty if arr === [] return false
  // never met the requirements of the callback so it is false.
  if (arr.length === 0) return false;

  // insert the first index in the callback. wrapped in if statement. if true returns true.

  if (callback(arr[0])) return true;

  // call someRecursive again and create a new array starting at the next index over from the previous
  return someRecursive(arr.slice(1), callback);
};

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
