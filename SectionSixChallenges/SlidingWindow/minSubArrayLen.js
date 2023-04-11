// Understand the problem
/*
Redefine:
minSubArray accepts an array of positive numbers and a positive number. Use these two inputs to find a contiguous sub array of which the sum is equal to or more than the integer passed in. Then return the length of that sub array. If these is none return 0.

Inputs: Array with positive values only. A positive number.
Outputs: A number val which holds the number of the smallest array to equal the positive number param.

Can output be determined based on inputs: Yes. We need to iterate through the array and the smallest one that is equal to or less than the positive number param. Then return the length of that array.

How should I label critical pieces of data:
The inputted array can be called arr and the number can be called num
*/

// Examples
/*
Simple:
minSubArrayLen([1, 5, 4], 9) // 2 -> [5,4] === 9
minSubArrayLen([1, 5], 9) // 0 nothing is greater than or less than 9

Complex:
minSubArrayLen([45, 46464, 40], 46) // 2 -> [45,46464] more than 46 but still the smallest.

Invalid:
minSubArrayLen("[1, 5, 4]", "7") // NaN
minSubArrayLen(9) // Empty input

Empty:
minSubArrayLen([1, 5, 4]) // 0
minSubArrayLen(9) // 0
*/

// Problem
/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

// Constraints
/*
Time Complexity O(n)
Space Complexity O(1)
*/

// Break it down

const minSubArrayLength = (arr, num) => {
  console.log("num" + num);
  // declare left and right pointer
  // left = 0
  let left = 0;
  // right = 1
  let right = 1;

  // declare sum set equal to arr[left]
  let sum = arr[left];

  // declare minLength equal to positive infinity so it can always be less than what ever length.
  let minLength = Infinity;

  // while right < arr.length to iterate through array
  while (right < arr.length) {
    // sum += arr[right] to add new values at all the different indexes
    sum += arr[right];
    // right++ to move right slider up in array
    right++;

    // if arr[right] or arr[left] is more than num just return 1 since theres not going to be anything shorter
    if (num <= arr[left] || num <= arr[right]) return 1;

    // if num <= sum
    // when this is true the first requirement of the subarray is met.
    // the next requirement would be that it is the smallest in length.
    if (num <= sum) {
      // if right - left is less than minLength minLength = right - left. This makes minLength smaller if a smaller array is found.
      if (right - left < minLength) minLength = right - left;

      //   console.log("length " + (right - left) + " sum " + sum);
      while (num <= sum) {
        // if right - left is less than minLength minLength = right - left. This makes minLength smaller if a smaller array is found.
        if (right - left < minLength) minLength = right - left;
        sum -= arr[left];

        // set left = right to start a new subArray
        left++;
      }
      // set left = right to start a new subArray
      left = right;

      // reset sum
      sum = arr[left];

      // right++ to move it up
      right++;
    }
  }
  if (minLength === Infinity) minLength = 0;
  // end of loop return minLength
  return minLength;
};

// console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLength([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLength([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
