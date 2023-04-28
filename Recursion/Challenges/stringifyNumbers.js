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
  // base case if object is zero than all values have been evaluated
  if (Object.keys(obj).length === 0) return obj;
  // get the key and the key value of the objects first key from function object.keys()
  const key = Object.keys(obj)[0];
  let keyVal = obj[Object.keys(obj)[0]];
  // deconstruct the object and remove the first item
  const { [key]: removedItem, ...rest } = obj;

  // if a number turn first item to a string and return it. Call stringifyNumbers again and plug in rest which holds the rest of the object to evaluate.
  if (typeof keyVal === "number") {
    return Object.assign(
      {},
      { [key]: keyVal.toString() },
      stringifyNumbers(rest)
    );
  }
  // if object do not convert to a string. Call the keyVal which holds the object in stringifyNums to evaluate on the object. Once that is complete the code will move on to the next function stringifyNums(rest) which will evaluate on the rest of the original obj
  if (typeof keyVal === "object") {
    return Object.assign(
      {},
      { [key]: stringifyNumbers(keyVal) },
      stringifyNumbers(rest)
    );
  }

  // if not a num or a object ex a bool just return a new obj with key and keyvalue plus what is returned from stringifyNums(rest)
  if (typeof keyVal !== "number" || typeof keyVal !== "object")
    return Object.assign({}, { [key]: keyVal }, stringifyNumbers(rest));
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
