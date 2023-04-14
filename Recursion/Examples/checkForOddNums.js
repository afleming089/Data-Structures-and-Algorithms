const checkForOddNums = (arr, count) => {
  console.log(arr);
  if (arr === []) return count;
  if (arr[arr.length - 1] % 3 === 0) {
    count++;
  }
  arr = arr.pop;
  checkForOddNums(arr, count);
};

console.log(checkForOddNums([4, 3, 2, 1, 8], 0)); // 2
