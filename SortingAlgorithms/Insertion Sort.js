function insertionSort(arr) {
  // sort first two values
  if (arr[0] !== arr[1])
    arr[0] < arr[1] ? ([arr[0], arr[1]] = [arr[1], arr[0]]) : null;
  // for loop starts at index 2 since 0 and 1 are sorted
  for (let i = 2; i < arr.length; i++) {
    // declare index. starts at curr i
    let index = i;
    // while curr arr[index] is more than previous index index --
    while (arr[index - 1] < arr[index]) {
      index--;
    }
    // when found insert arr[index] in between the previous and next item in the sorted section of the array.
    // use slice 0, index -1 for the first half and slice index + 1, currI for the second half. Then concat them together.
    console.log(arr[index]);
  }
  return arr;
}

console.log(insertionSort([34, 22, 10, 19, 17])); // [10, 17, 19, 22, 34]

// console.log(insertionSort([45, 6, 81, 2, 3, 46, 87, 69, 4]));
// // returns [2,3,4,6,45,46,69,81,87]

// // nearly sorted array
// console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])); // returns [1,2,3,4,5,6,7,8]
