// Step 1: Understand The Problem
/*
Restate:

Find out if two positive numbers have the same frequency within them. Then return a bool value based on frequency's.

Time complexity must be O(N)

Inputs:

Take in two number data types

Outputs:

One bool value.

Can the output be determined based on the inputs?
Yes. To solve this problem we need to store frequency values in a object and then compare if those values are the same.

How should I label critical pieces of data?

Function input values can be num1 and num2.
Output value is a bool.
*/

// Step 2: Concrete Examples
/*
Simple:

sameFrequency(12, 21) // true
sameFrequency(54, 34) // false

Complex:
sameFrequency(548, 854) // true


Empty inputs:
sameFrequency() // null

Invalid Examples:
sameFrequency("the", "hehe") // null

*/

/*
Problem:

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

*/

const sameFrequency = (num1, num2) => {
  // Step 3: Break it down

  // if num1 or num2 === undefined return "Function requires two number inputs."
  if (num1 === undefined || num2 === undefined)
    return "Function requires two number inputs.";
  // if num1 or num2 !== number return "Values must be of type number."
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "Values must be of type number.";

  // convert num1 and num2 to str.
  num1 = num1.toString();
  num2 = num2.toString();

  // if num1.length !== num2.length return false
  if (num1.length !== num2.length) return false;

  // declare two objects to hold frequency of both num1 and num2
  let frequencyNum1 = {};
  let frequencyNum2 = {};
  // make a for loop
  for (let i = 0; i < num1.length; i++) {
    // use for loop to iterate through the nums
    // if num dose not exist in object make a new key value and assign the val as 1
    // if it dose exist key val of num ++
    frequencyNum1[num1[i]]
      ? frequencyNum1[num1[i]]++
      : (frequencyNum1[num1[i]] = 1);

    frequencyNum2[num2[i]]
      ? frequencyNum2[num2[i]]++
      : (frequencyNum2[num2[i]] = 1);
  }

  // another for loop outside of first
  for (let key in frequencyNum1) {
    // if obj1[key] !== obj2[key] then return false

    if (!frequencyNum2.hasOwnProperty(key)) return false;
    if (frequencyNum1[key] !== frequencyNum2[key]) return false;
  }

  // end of loop return true
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
