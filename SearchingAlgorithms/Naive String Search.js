function stringSearch(longStr, shortStr) {
  let shortsFound = 0;
  let i = 0;
  for (const char of longStr) {
    if (char === shortStr[i]) i++;
    else i = 0;
    if (i === shortStr.length - 1) shortsFound++;
  }

  return shortsFound;
}

// console.log(stringSearch("string is a string", "string")); // 2
console.log(stringSearch("adawa2a, adv", "a")); // 5
// console.log(
//   stringSearch("i have 400 mighty coins in my coin wallet of coins", "coins")
// ); // 2
