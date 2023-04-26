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
  // for loop for the length of arr[0]
  // toUpper everything then at then of of the loop concat it to the rest of the array and call capitalizedWords again with arr.slice(1)
};

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
