// Step 1: Understand the Problem
/*
Restate the problem
Check if there are any dupes in an array.
If there is return true.
Time complexity aim O(n log n).
Space time complexity O(1)

Inputs
An array so multiple values can be asserted on.

Outputs
Bool value.

Can the outputs be detriment from the input?
Yes the outputs are based on weather of not the inputs have a duplicating value or not. If yes than the output is true. If no then false.

How should I label critical pieces of data?
Input can be labeled val.

*/
// Step 2: Concrete Examples
/*
Simple
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true

Complex
areThereDuplicates(1) // false
areThereDuplicates(19.5, 12.2, 12.2) // true

Empty input
areThereDuplicates() // false

*/

/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

// Step 3: Break it down
const areThereDuplicates = (vals) => {
  let valsObj = {};
  for (let val of vals) {
    valsObj[val] === undefined
      ? (valsObj[val] = 1)
      : (valsObj[val] = valsObj[val] + 1);
  }

  for (let val in valsObj) {
    if (valsObj[val] > 1) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates([1, 2, 3])); // false
console.log(areThereDuplicates([1, 2, 2])); // true
console.log(areThereDuplicates(["a", "b", "c", "a"])); // true
