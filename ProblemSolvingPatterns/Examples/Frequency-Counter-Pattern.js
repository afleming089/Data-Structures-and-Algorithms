/*

Write a function called same, which accepts
two arrays. The function should return true if
every value in the array has it`s corresponding value
squared in the second array. The frequency if values must be the same.

*/

const betterSame = (arr, sqrArr) => {
  let sqrObj = {};

  if (arr.length !== sqrArr.length) {
    return false;
  }

  for (let num of sqrArr) {
    sqrObj[num] = num;
  }

  for (let num of arr) {
    num = num * num;

    if (!(num in sqrObj)) {
      return false;
    }
  }

  return true;
};

console.log(betterSame([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
