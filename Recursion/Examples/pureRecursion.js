const collectOddValues = (arr) => {
  // declares arr to be returned
  let newArr = [];

  // base case. If arr.length === 0 all values have been evaluated
  if (arr.length === 0) {
    return newArr;
  }

  // checks to see if item is odd
  if (arr[0] % 2 !== 0) {
    // pushes first element to newArr if odd
    newArr.push(arr[0]);
  }

  // concat takes newArr and adds the returned array to the end of it.
  // arr.slice parameter inserts everything in arr but the first index into collectOddValues
  // newArr is waiting on newArr.concat and newArr.concat is waiting on collectODdVals

  // collectOddVals has arr.slice(1) inputted
  // a new newArr is made
  // checks to see if it is odd
  // if it is push to newArr
  // newArr = newArr.concat... is run again
  // once arr.length !== 0 is true the new arr is returned and all of the other newArr = newArr.concat... can finally finish because they have there
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};
