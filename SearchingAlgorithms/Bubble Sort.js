function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // if the current item is more than the next item swap them
      count++;
      if (arr[i] > arr[i + 1]) {
        noSwaps = false;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    if (sorted) break;
  }

  return arr;
}

// console.log(bubbleSort([45, 6, 81, 2, 3, 46, 87, 69, 4]));
// // returns [2,3,4,6,45,46,69,81,87]

// nearly sorted array
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])); // returns [1,2,3,4,5,6,7,8]
