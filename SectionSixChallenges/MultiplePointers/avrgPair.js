// Step 1: Understand the Problem
/*
Restate
Determine if a pair of numbers in a sorted array equals the target average.

What are the inputs?
An array of numbers and a target average as a number.

What are the outputs?
Bool statement. True if avrPair false if none.

Can the output be determined from the input?
Yes. We need to take the input and find out if any two pairs of numbers in the array equal the target average. This will decide if the solution is true or false.

How should I label the critical piece of data?
Input array should be called nums. Target average can be called targetAvrg.
Pointers can be called l and r short for left and right.
*/

// Step 2: Concrete Examples
/*
Simple
averagePair([1, 2], 1.5) // true

Complex
averagePair([1.5, 2.4], 1.95) // true

Empty
averagePair() // false

Invalid
averagePair([1, 2]) // error
*/

/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

*/

// Step 3: Break it down

const averagePair = (arr, target) => {
  // declare l and r
  // l starts at index middle and r starts at the middle + 1
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  // for loop that goes till length of array.
  while (leftPointer <= rightPointer) {
    // find average of val at i an r index

    const middle = (arr[leftPointer] + arr[rightPointer]) / 2;

    if (middle === target) return true;

    // if average is less than target r++
    if (middle < target) {
      leftPointer++;
    } else {
      // if average is more than target l--
      rightPointer--;
    }
  }

  // return false at end of array because target is not found.

  return false;
};

// Sample Input:

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true 10 and 6
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
