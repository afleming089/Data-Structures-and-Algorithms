// Understand the problem
/*
Redefine:
Create a recessive function that multiplies the number inputted times all of the numbers underneath it down to zero. This function will return the product of the factorial.

Inputs:
A single number.

Outputs:
The product of the input number.

Can output be found based on inputs?
Yes. The output is the product of all of the factorial of the input.

How should I label important pieces of data?
The input can be called num. The output can be a updated num returned.

*/
// Examples
/*
Simple: factorial(0) // 1
Complex:
factorial(3) // 6
factorial(50000) // infinity
Invalid:
factorial("string") // undefined
Empty: factorial() // undefined

*/
// problem
/*
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/

// Break it down

const factorial = (num) => {
  // base case when num = 0 return 1; This makes it so num is not subtracted forever.
  if (num === 0) return 1;
  // num equals the product of num times factorial(num - 1)
  return num * factorial(num - 1);
  // return num for top of stack
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
