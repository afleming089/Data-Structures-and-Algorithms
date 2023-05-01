function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = Math.round((right + left) / 2);
    if (val === arr[mid]) return mid;
    if (val < arr[mid]) right = mid;
    if (val > arr[mid]) left = mid;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 46, 55, 89, 120], 55)); // 4
console.log(binarySearch([1, 2, 3, 46, 55, 89, 120], 120)); // 6
console.log(binarySearch([1, 2, 3], 5)); // -1
