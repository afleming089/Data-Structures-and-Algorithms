// Understand the problem
/*
Restate:
Find the sum off all of the numbers from 0 to num.
Inputs:
A number.
Outputs:
The sum of the range of numbers.
Can outputs be found based on inputs?
Yes. It is the sum of the range of numbers.
How should I label critical data pieces?
The input number can be called endOfRange and the output can be called sumOfRange.
*/
// Examples
/*
Simple: recursiveRange(1) // 1
Complex: recursiveRange(8) // 36
Invalid: recursiveRange(-1) // No numbers less than 0
Empty: recursiveRange() // 0
*/
// Problem
/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
*/
// Break it down

const recursiveRange = (endOfRange) => {
  // if statement to stop endOfRange from being less than zero.
  if (endOfRange < 0) return "Number must be more than zero.";
  // base case. If endOfRange === 0 then return 0; endOfRange will get smaller until it hits zero. If zero is hit than it will be added to the sumOfRange.
  if (endOfRange === 0) return 0;
  let sumOfRange = 0;
  // add endOfRange to sumOfRange and then add recursiveRange(endOfRange - 1) to continue the loop.
  sumOfRange = endOfRange + recursiveRange(endOfRange - 1);
  // return sumOfRange
  return sumOfRange;
};

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
