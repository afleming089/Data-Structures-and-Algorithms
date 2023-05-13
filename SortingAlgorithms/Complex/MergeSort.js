// used to merge two sorted arrays
function merge(arr1, arr2) {
  // if only one array is inputted just return the inputted array because you can not merge arr and undefined
  if (arr1 === undefined) return arr2;
  if (arr2 === undefined) return arr1;

  let mergeArr = [];

  // used to iterate through both arrays
  let j = 0;
  let i = 0;

  // the array thats element at i or j index is less than the element at i or j index is pushed to mergeArr. Then which ever one was smaller is iterated on or 1 is added to the variable.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }

  // if i is not already at its length push the rest of arr1 onto mergeArr
  for (i; i < arr1.length; i++) {
    mergeArr.push(arr1[i]);
  }

  // same as the above for loop just for if there is anything left in arr2
  for (j; j < arr2.length; j++) {
    mergeArr.push(arr2[j]);
  }

  return mergeArr;
}

// takes an array of single element arrays and runs them through merge until they are all in a single sorted array
function sort(split) {
  // if the next value over from 0 is undefined that means all of the elements are sorted into a single array so they can be returned with split[0]
  if (split[1] === undefined) return split[0];

  let mergedArr = [];

  for (let i = 0; i < split.length; i += 2) {
    // the array at i and the next array over at i + 1 are merged together
    mergedArr.push(merge(split[i], split[i + 1]));
    // split remove one of the arrays so it is not endlessly added to merge
    // split = split.slice(i + 1);
  }

  // empty's split to save memory
  split = [];

  return sort(mergedArr);
}

// splits an array down to single element arrays then runs sort which sort and once that is done returns the sorted array.
function mergeSort(arr) {
  let split = [];

  // grabs the element at index i in arr and puts it in an array by its self. Then it is pushed to split.
  for (let i = 0; i < arr.length; i++) {
    split.push([arr[i]]);
  }

  // returns the outcome of sort which is a recursive function that runs until all elements are in a single array.

  return sort(split);
}

console.log(mergeSort([1, 3, 4, 67, 46]));
// [1,3,4,46,67]

console.log(mergeSort([8, 5, 7, 17, 0]));
// [0,5,7,8,17]

console.log(mergeSort([90, 45, 64, 85, 2]));
// [2,45,64,85,90]

console.log(mergeSort([45, 4684, 47, 39, 465, 78564, 1]));
// [1,39,45,47,465,4684,78564]

console.log(mergeSort([5, 1, 2, 8, 46, 45, 2, 3, 4, 8]));
// [1, 2, 2, 3, 4, 5, 8, 8, 45, 46]
