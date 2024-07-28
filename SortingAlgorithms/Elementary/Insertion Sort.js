function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([23, 22, 66, 10, 19, 17])); // [10, 17, 19, 22, 23,  66]

console.log(insertionSort([45, 6, 81, 2, 3, 46, 87, 69, 4]));
// returns [2,3,4,6,45,46,69,81,87]

// nearly sorted array
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])); // returns [1,2,3,4,5,6,7,8]
