// Understand the problem
/*
Redefine:
Find all strings in an object and its nested objects and return them all in an array.

Inputs:
Object

Outputs:
An array containing strings.

Can I find the output based on the input:
Yes. We need to find all the strings in an object and its sub objects and return them all in a string.

How shouLd I label critical pieces of data:
The input can be called obj and the output will be a unnamed array because it will be recursively returned in the function.
*/

// Examples
/*
Simple: collectString({s: "s", b: "b", c: "c"}) // ["s","b","c"]
Complex: collectString({hey: "bye" {d: "d", yes: true}}) // ["bye", "d"]
Empty: collectString({}) // []
Invalid: collectString("yes") // undefined
*/

// Problem
/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.
*/

// Break it down

function collectStrings(obj) {
  // declare first key in the object and its key value as variables
  const key = Object.keys(obj)[0];
  const keyVal = obj[Object.keys(obj)[0]];

  // deconstruct the object and remove the first item
  const { [key]: removedItem, ...rest } = obj;

  // if object is string add to return array and call collectStrings with rest of the object inside.
  if (typeof keyVal === "string") {
    return [keyVal].concat(collectStrings(rest));
  }

  // if it is an object plug it into collectStrings so that object can be evaluated
  if (typeof keyVal === "object") return collectStrings(keyVal);

  // base case. if no if statements are true just return [] so that the end of the array is not undefined
  return [];
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
