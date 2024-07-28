// Understand the Problem
/*
Restate
Find the longest sequence of unique characters and return that number.

Inputs
A string.

Outputs
The length of the substring as a number.

Can outputs be found based of inputs?
Yes we need to take a string and find the longest string of unique values and then return that number.

How should I label important pieces of data?
The input string can be labeled as str and the output val can be called maxLength.
*/

// Examples
/*
Simple
findLongestSubstring("abc") // 3

Complex
findLongestSubstring("23as2dwc") // 4

Invalided
findLongestSubstring(null) // 0

Empty
findLongestSubstring("") // 0
*/

// problem
/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

// pseudo code
const findLongestSubstring = (str) => {
  if (str.length === 1) return 1;
  // declare two pointers (left and right)
  // left = 0
  let left = 0;
  // right = 1
  let right = 1;
  // declare maxLength set to 0
  let maxLength = 0;
  // declare object to count frequency of values in a window
  // add the str[left] to the object
  let frequency = {};
  frequency[str[left]] = 1;

  // while right < str.length
  while (right < str.length) {
    // add the str[right] to the object
    // if obj[right] exist add 1 else set equal to 1
    frequency[str[right]]
      ? frequency[str[right]]++
      : (frequency[str[right]] = 1);

    // if str[right] object val is more than one
    if (1 < frequency[str[right]]) {
      // clear frequencyObject
      frequency = {};
      // left = right
      left++;
      right = left;
      // add str[left] to obj
      frequency[str[left]] = 1;
    }

    // right++
    right++;

    if (maxLength < right - left) maxLength = right - left;
  }
  return maxLength;
};

// examples
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring(" ")); // 1
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6 awesom
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
