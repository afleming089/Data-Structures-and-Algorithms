// Understand the problem
/*
Redefine:
A string is returned in reverse. 
Inputs:
Str.
Outputs:
Str.

Can outputs be found based on inputs?
Yes. The output is the input but in the opposite direction.

How should I label important data?
The string can be called str and the output can be called reverseStr. 
*/
// Examples
/*
Simple: reverse(aws); // swa
Complex: reverse(I hit 4 baskets); // steksab 4 tih I
Invalid: reverse(4764787); // "Not a string"
Empty: reverse(); // ""
*/
// Problem
/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

// Break it down
const reverse = (str) => {
  // base case if str.length is zero return ""
  if (str.length === 0) return "";
  // push last element to end of reverseString
  // push reverse(str.substring(0, str.length - 1)) onto new string
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
