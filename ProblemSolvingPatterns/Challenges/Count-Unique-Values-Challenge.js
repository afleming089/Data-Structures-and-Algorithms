/*
Step 1: Understand the problem

Restate:
Count the number of unique values in a sorted array and output that count.

Inputs:
Single sorted array

Outputs:
Number value

Can the outputs be determined from the input?
Yes. The outputs is just the number of unique values in the input array.

How should I label critical pieces of data in the problem?
sortedArray = input array.
uniqueVals = counted number of unique vals.
left = index of pointer starting at the front of the array.
right = index of the pointer starting at the end of the array.


Step 2: Concrete Examples

Simple example:
countUniqueValues([1,2]) // 2

Complex example:
countUniqueValues([1, 2, 3, 4, 4, 4]) // 4

Empty inputs:
countUniqueValues([]) // 0

Invalid inputs:
countUniqueValues([the, a, 4]) // 1

Step 3: Break it down
Declare left and right
left starts at 0
Right starts at 1
Right goes till it hits a val that is not equal to. uniuqeVal++
Left is set equal to right.
Right++
Repeats till end of loop.


*/

/*

Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

*/

const countUniqueValues = (arr) => {
  let uniqueVals = 0;

  let left = 0;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[left] !== arr[i]) {
      uniqueVals++;
      left = i;
    }
  }
  return uniqueVals;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
