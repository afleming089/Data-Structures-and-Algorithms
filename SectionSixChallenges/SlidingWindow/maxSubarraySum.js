// Understand the problem
/*
Redefine:
Inputs array and number. Find the max sum of a subarray in the parent array that has the length of number. All index values in subarray must be consecutive.

What are the inputs:
An array to hold large sum of numbers. A number to determine the size of the subarray to be asserted on.

What are the outputs:
A single number which is the max sum.

Can outputs be determined based off inputs:
Yes. We need to find a subarray with the highest sum that also has consecrative numbers.

How should I label critical pieces of data:
Input array can be called arr and the length of the subarray can be called length since it is the length of a sliding window.
*/

// Examples
/*
Simple:
maxSubarraySum([100,200,300,400], 2) // 700

Complex:
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 

Invalid:
maxSubarraySum([2,3], 3) // null

Empty:
maxSubarraySum(3) // null
maxSubarraySum([2,3]) // null

*/

// Problem
/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

// Constraints
/*
Time Complexity - O(N)
Space Complexity - O(1)
*/

// Break it down

const maxSubarraySum = (arr, windowLength) => {
  // if arr.length < windowLength return null since subarray is out of range of parent array.
  if (arr.length < windowLength) return null;
  // declare start of window set to index 0. Will act as the beginning of the subarray
  let start = 0;

  // declare end set to index 1. Will act as the checker for the each item in the array.
  let end = 1;

  // declare sum and have it equal arr[start]
  let sum = arr[start];
  // declare maxSum. Starts at -Infinity incase arr is all negative
  let maxSum = Number.NEGATIVE_INFINITY;
  // while end index !== arr.length
  while (end !== arr.length) {
    // add arr[end] to sum
    sum += arr[end];
    // end++
    end++;

    // if sum > maxSum maxSum = sum
    if (maxSum < sum) maxSum = sum;
    // if end - start === windowLength subtract arr[start] from sum and add one to start
    if (end - start === windowLength) {
      sum -= arr[start];
      start++;
    }
  }
  // return maxSum at end of loop
  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
