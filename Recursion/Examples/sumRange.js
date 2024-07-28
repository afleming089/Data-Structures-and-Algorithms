const sumRange = (num) => {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1); // recursive call
};

// if we plugged in 3 this is how this function would work
// sumRange(3)
// return 3 + sumRange(3 - 1) ---> sumRange(2);
// sumRange(2)
// return 2 + sunRange(2 - 1) ---> sumRange(1);
// sumRange(1)
// return 1;

// call stack
// sumRange(3) is waiting on sumRange(2)
// sumRange(2) is waiting on sumRange(1)

// when base case is met aka return 1 then sumRange(1) returns 1
// Then sumRange(2) return 3 and then sumRange(3) return 6 and then the call stack is empty.
