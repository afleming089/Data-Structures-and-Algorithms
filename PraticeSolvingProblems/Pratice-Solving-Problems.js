// Step 1: Understand the problem

/*
Problem
Write a function which takes two numbers and returns their
sum.

Understand the problem

Restate
 Write a function that adds two numbers together and outputs.
the solution

Inputs
- ints?
- floats?
- what about string for large numbers?

Outputs
- ints?
- floats?
- string?

Can the output be determined based off the inputs?
Yes. We just need to add the two integers to get the sum.

How should I name the important pieces of data?
There should be an array named nums that holds the two data inputs.
The output should be called sum.

*/

// Step 2: Concrete examples

/*
Problem: Write a function which takes in a string and returns
counts of each character in string.

Simple example
charCount("aaaa"); return {a:4}
charCount("hello") returns {h:1, e:1, l:2, o:1}

Could ask if I should have every letter in output set to 0 if not used.

Complex example
charCount("my phone number is 182763") What do we do for spaces and numbers?
charCount("Hello hi") Is the problem case sensitive?

Examples with empty cases
charCount("") returns {}

Explore examples with invalid inputs
charCount(null) What if they pass in null or a number?
*/

// Step 3: Break it down

/*
Problem: Write a function which takes in a string and returns
counts of each character in the string.
*/

// const charCount = (str) => {
//   // do something.
//   // make object to return at the end.
//   let results = {};
//   // loop over the string.
//   for (let i = 0; i < str.length; i++) {
//     // lowercase str.
//     const char = str[i].toLowerCase();

//     if (/[a-z0-9]/.test(char)) {
//       if (results[char] > 0) {
//         // if key value dose exist and is a number/letter then just add 1 to the existing value of that key.
//         results[char]++;
//       } else {
//         // if key value that is number/letter dose not exist in the object add it and give it a value of 1.
//         results[char] = 1;
//       }
//       // if char is something else don't do anything.
//     }
//   }

//   // return a object with keys that are lowercase and number values that are in the string.
//   return results;
// };

// refactored version
const charCount = (str) => {
  // do something.
  // make object to return at the end.
  let results = {};
  // loop over the string.
  for (var char of str) {
    // lowercase str.
    char = char.toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      results[char] = ++results[char] || 1;
      // if char is something else don't do anything.
    }
  }

  // return a object with keys that are lowercase and number values that are in the string.
  return results;
};

console.log(charCount("aaaa"));
console.log(charCount("Hello Hi it his bOyS"));
// console.log(charCount("my phone number is 182763"));
// console.log(charCount("Hello hi"));
