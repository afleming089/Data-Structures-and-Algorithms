const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
  num--;
  factorial(num);
};

console.log(factorial(10));
