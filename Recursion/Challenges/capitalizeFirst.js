// Understand the problem
/*
Redefine:
Capitalize the first letter of each string in the array.

Inputs:
An array of strings.

Outputs:
A array of strings.

Can outputs be found based on inputs?
Yes. We need to edit the inputs so that the first letter of each string is a capital letter. We can edit the ordinal string and return that so space complexity stays constant.

How should I label critical pieces of data?
I should label the input array arr. We can modify that array and return it.
*/
// Example
/*
Simple: capitalizeFirst([car, plane, bane]) // [Car, Plane, Bane]
Complex: capitalizeFirst([yes sir, no car,]) // [Yes Sir, No Car]
Invalid: capitalizeFirst([234, 23]) // undefined
Empty: capitalizeFirst([]) // undefined
*/
// Problem
/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

// Break it down

const capitalizeFirst = (arr) => {
  const replaceZero = (replacement) => {
    return replacement[0].toUpperCase() + replacement.substring(1);
  };

  // when array is empty return arr and end chain.
  if (arr.length === 0) return arr;
  // take arr[0][0] and toUpper it
  arr[0] = replaceZero(arr[0]);

  // plug arr.split(1) in to capitalizeFirst to move up the chain
  return arr.slice(0, 1).concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
