// Step 1: Understand the problem
/*
Redefine:
If there is a subsequence that is in the same order as the give value return true. If there are other characters in between thats okay as long as eventually the next character appears in the array.

Inputs:
Two strings. Even for number inputs. This makes the data iterable.


Outputs:
Bool. True or false.

Can we find outputs based on inputs?
Yes. If there is a subsequence that matches the give value in the array and it is in order than return true. Else return false.

How should I label critical pieces of data?
The subsequence we are trying to find can be called target and the string we will be searching can be called sequence.



*/
// Step 2: Examples

/*
Simple:
isSubsequence("hi", "hi there") // true

Complex:
isSubsequence("abc", "acb") // false
isSubsequence("abc", "abbbbbcc") // true

Invalid:

Empty:
isSubsequence("", "") // true

*/

// Problem
/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

// Test cases

// Step 3: Break it down

const isSubsequence = (target, sequence) => {
  // declare pointers called current, next, and toCompare.
  // current starts at index 0 in target.
  let prevVal = -1;
  let current = 0;
  // next starts at index 1 on target and is always 1 more than current.
  let next = 1;

  // checks the length of the sequence to make sure it equals target.
  let length = 0;

  // for loop to iterate through sequence.
  // toCompare starts at index 0 on sequence and the pointer used to iterate through sequence.
  for (let toCompare = 0; toCompare < sequence.length; toCompare++) {
    // if current === toCompare add one to current and next. This moves them up so we can check the other chars.

    if (target[current] === sequence[toCompare]) {
      prevVal++;
      current++;
      next++;
      length++;
    }

    // if next === toCompare return false because the order of the substring is not correct.
    if (
      target[next] === sequence[toCompare] &&
      target[prevVal] === target[current] &&
      target[current] !== sequence[toCompare]
    )
      return false;
  }

  // if length dose not equal target.length than the order is right but it dose not contain all of the chars so return false.
  if (length !== target.length) return false;

  // return true if order is right and sequence length is correct.
  return true;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

console.log(isSubsequence("perks", "adasdawpcbasdaeddrkka s")); // true
console.log(isSubsequence("perks", "persadk s")); // false
