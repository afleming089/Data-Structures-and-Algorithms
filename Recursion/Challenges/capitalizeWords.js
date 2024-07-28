// Understand the problem
/*
Redefine:
Take an inputted array and capitalize all the letters in it.
Inputs:
An array.
Outputs:
A array.
Can outputs be found based on inputs?
Yes. The output is just the input array but modified so that all the letters are capitalized.
How should I label critical pieces of data?
The input array is all we need for this problem. We will call it arr and output a modified version of it when the function returns.
*/

// Examples
/*
Simple: capitalizedWords([i, the]) // [I, THE]
Complex: capitalizedWords([the bus, is, driving]) // [THE, BUS, IS, DRIVING]
Empty: capitalizedWords([]) // []
Invalid: capitalizedWords([123, 456]) // [123, 456]
*/
// Problem
/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

// Break it down
const capitalizedWords = (arr) => {
  // base case. If arr.length is zero return empty arr
  if (arr.length === 0) return arr;

  // get first value and set it equal to the upper case version
  const upperCase = [arr[0].toUpperCase()];

  // concat to upperCase and recursively call capitalizeWorlds again to uppercase the next index.
  return upperCase.concat(capitalizedWords(arr.slice(1)));
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
