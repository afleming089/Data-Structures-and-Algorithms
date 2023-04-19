// Understand the problem
/*
Redefine:
Function accepts a base and a exponent. It will return the power of the base when the exponent is applied. It will act similar to how Math.pow acts.

Inputs:
Two numbers. A base and a exponent.
Outputs:
A number is returned.

Can outputs be found based on inputs:
Yes the output is the base to the power of the exponent.

How should I name critical data points?
The base should be called base and the exponent should be called expo.
*/
// Examples
/*
Simple: power(3, 1) // 3
Complex: power(5, 5) // 3125
Invalid: power()
Empty: power()
*/

// Problem
/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

// Break it down

const power = (base, expo) => {
  // base case
  // if expo === 0 return 1 so it can be multiplied to base and end the adding to the chain.
  if (expo === 0) return 1;
  // else
  // base will equal base * power(base, expo)
  base = base * power(base, expo - 1);
  // return base here so function first in call stack has an output.
  return base;
};
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
