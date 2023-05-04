function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        noSwaps = false;
        min = j;
      }
    }

    if (!noSwaps) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17])); // [10, 17, 19, 22, 34]

console.log(selectionSort([45, 6, 81, 2, 3, 46, 87, 69, 4]));
// returns [2,3,4,6,45,46,69,81,87]

// nearly sorted array
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])); // returns [1,2,3,4,5,6,7,8]
