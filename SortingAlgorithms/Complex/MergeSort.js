// find which value was already returned and then just remove it from split

// used to merge two sorted arrays
function merge(arr1, arr2) {
  console.log(arr1, arr2);

  // if either are undefined just return the other. This is incase either 1 or 2 have no value.
  if (arr1 === undefined) return arr2;
  if (arr2 === undefined) return arr1;

  // declare mergeArr
  let mergeArr = [];

  // indexes of both arrays.
  let j = 0;
  let i = 0;

  // while they don't equal length push the lesser value and ++ pushed items index.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }
  // for loop that starts at the current index of the array and pushes the rest of the array onto mergeArr.
  for (i; i < arr1.length; i++) {
    mergeArr.push(arr1[i]);
  }

  for (j; j < arr2.length; j++) {
    mergeArr.push(arr2[j]);
  }

  // return the two merged arrays
  return mergeArr;
}

function mergeSort(arr) {
  // declare split as empty array
  let split = [];
  // split all elements into single element arrays and then push to split
  for (let i = 0; i < arr.length; i++) {
    const elementArr = [arr[i]];
    split.push(elementArr);
  }
  // hold merged elements from merge()
  let mergedArr = [];

  // then plug into merge because single arrays are already sorted

  for (let i = 0; i < split.length; i++) {
    console.log("i " + i);
    mergedArr.push(merge(split[i], split[i + 1]));
    console.log("---------------------");
    // slice split each time so values are not repeated
    split = split.slice(i + 1);
    console.log("split");
    console.log(split);
  }

  mergedArr.push(merge(split[0], split[1]));

  // return the sorted array
  return mergedArr;
}

console.log(mergeSort([1, 3, 4, 67, 46]));
