/*
Given two strings, write a function to determine if the second string is an 
anagram of the first. An anagram is a word, phrase, or name formed by rearranging,
the letters or another, such as cinema, formed from iceman.
*/
const objConstructor = (str, obj) => {
  for (let char of str) {
    if (char in obj) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
};

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let objStr1 = {};
  let objStr2 = {};

  objConstructor(str1, objStr1);
  objConstructor(str2, objStr2);

  for (let key in objStr1) {
    if (objStr1[key] !== objStr2[key]) return false;
  }

  return true;
};

console.log(isAnagram("", "")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("awesome", "awesom")); // false
console.log(isAnagram("qwerty", "qeywrt")); // true
console.log(isAnagram("texttwisttime", "timetwisttext")); // true
