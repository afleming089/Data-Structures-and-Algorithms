// Understand the problem
/*
Redefine:
Any and all values in an object that is a number must be turned into a string.

Inputs:
A object.

Outputs:
A object.

Can outputs be found based on inputs?
Yes. The output is just he input but with the numbers turned into strings.

How should I label critical pieces of data?
The input can be called obj and the output will just be an updated version of the output.

*/
// Examples
/*
Simple: stringifyNumbers({num: 1, yes: "no"}) // {num: "1", yes: "no"}
Complex: stringifyNumbers({num: 1 {num: 2}}) // {num: "1" {num: "2"}}
Invalid: stringifyNumbers([1,2,3]) // Param must be an object
Empty: stringifyNumbers() // undefined
*/

// Problem
/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
*/

// Break it down

function stringifyNumbers(obj) {
  // this for loop will act as the base case. When it finished the obj is returned.
  // have a for in loop to iterate through obj
  for (let key in obj) {
    // if number update key value to a toString version of the number

    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    }

    // if a object plug that back into stringifyNumbers and have the key value set to equal that upon return. This will get all sub objects and add them on.

    if (typeof obj[key] === "object") {
      stringifyNumbers(obj[key]);
    }
  }

  // when for loop over return the updated input object.
  return obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
  {
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
  }
  */
