// Understand the Problem
/*
Restate:
Return the nth number in the fibonacci sequence. The fibonacci sequence is the previous two numbers summed together.

Inputs:
A number for which nth number to return in the fib sequence.

Outputs:
The number at the index that was inputted into the function.

Can outputs be determined from inputs?
Yes. The input is the nth number in the sequence we want to get in the fib sequence. The nth number is the input of the function.

How should I label critical pieces of data?
The nth number can be called index
*/

// Example
/*
Simple: fib(2) // 1
Complex: fib(10) // 55
Empty: fib() // 0
Invalid: fib(-1) // 0

*/
// Problem
/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

// Break it Down

const fib = (index) => {
  // helper function to calculate the fib sequence
  // count starts at 2 because the sequence adds the previous two numbers
  const helper = (prev = 1, curr = 1, count = 3) => {
    // fibNum = prev + curr
    let fibNum = prev + curr;

    // when count === index return the fibNum at that index
    if (count === index) return fibNum;

    // fibNum equals helper(curr, fibNum, count++)
    fibNum = helper(curr, fibNum, (count += 1));
    // return fibNum
    return fibNum;
  };

  // return helper
  return helper();
};

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
