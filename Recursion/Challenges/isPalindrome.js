// Understand the problem
/*
Redefine:
If a string is the same forward and back then return true. Else false.

Inputs:
A string.

Outputs:
true or false.

Can outputs be found based on inputs?
Yes. We need to just reverse the original string and see if it matches the original string. If true return true else false.

How should I label critical pieces of data?
We can label both of the strings str and reverseStr.

*/
// Examples
/*
Simple: isPalindrome(true) // false
Complex: isPalindrome(abccba) // true
Invalid: isPalindrome(123) // false
Empty: isPalindrome() // true
*/

// Problem
/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

// Break it down

const isPalindrome = (str) => {
  const reverse = (str) => {
    if (str === "") return "";
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  };

  if (str === reverse(str)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
