function stringSearch(longStr, shortStr) {
  // keeps track of numbers of short strs found
  let shortsFound = 0;
  // index of the shortStr to be compared to char of longStr
  // also used to compare if the lengths of found string is the same as the shortStr
  let i = 0;

  for (const char of longStr) {
    // we compare the strings here. if the char is in shortStr i++. Once i equals the length of the shortStr we will know they are the same because i only increase when char === shortStr[i] is true.
    if (char === shortStr[i]) {
      i++;
    } else {
      i = 0;
    }

    // comparing just the lengths instead of the actual values of the strings saves on space because we are not creating a new str which could have the length of o(n). By not creating a new str we have a time complexity of o(1);
    if (i === shortStr.length) shortsFound++;
  }

  return shortsFound;
}

console.log(stringSearch("string is a string", "string")); // 2
console.log(stringSearch("adawa2a, adv", "a")); // 5
console.log(
  stringSearch("i have 400 mighty coins in my coin wallet of coins", "coins")
); // 2
