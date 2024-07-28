// Understand the problem
/*
Redefine:
Recursively search through an object and find all of the even values. Then return the sum of all of them.

Inputs:
An object holding an assortment of data.

Outputs:
A number.

Can outputs be found based on inputs?
Yes. We must search through an object and find all of the data that is an even number and add it to out sum.

How should I label critical pieces of data?
The input values can be called obj and the output value will be called sum.
*/

// Examples
/*
Simple: nestedEvenSum({a: 1, b: 2, c: 4}) // 6
Complex: nestedEvenSum({a: {b:{c: 1, d: 2, a: 4}}}) // 6
Empty: nestedEvenSum() // 0
Invalid: nestedEvenSum([1, 2, 3]) // Must insert an object
*/

// Problem
/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
*/

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// Break it down
const nestedEvenSum = (obj) => {
  let sum = 0;
  // check to see if obj is an object
  if (typeof obj !== "object") return "Input must be an object";
  // for loop to iterate through the top layer of the obj
  for (let key in obj) {
    // if the obj[key] value is a number and even add it to sum
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
    // recursive function to plug an object back in to nestedEvenSum if it is a object then add the return to sum
    if (typeof obj[key] === "object") sum += nestedEvenSum(obj[key]);
  }

  // return sum at the end
  return sum;
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
