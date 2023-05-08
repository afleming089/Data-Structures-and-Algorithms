function insertionSort(arr) {
  // if (arr[1] < arr[0]) [arr[0], arr[1]] = [arr[1], arr[0]];
  for (let i = 0; i <= arr.length; i++) {
    let j = arr.length - 1;
    while (arr[i] > arr[j]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([23, 22, 66, 10, 19, 17])); // [10, 17, 19, 22, 23,  66]

// console.log(insertionSort([45, 6, 81, 2, 3, 46, 87, 69, 4]));
// // returns [2,3,4,6,45,46,69,81,87]

// // nearly sorted array
// console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])); // returns [1,2,3,4,5,6,7,8]
