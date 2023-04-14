const takeShower = () => {
  return "Showering";
};

const eatBreakfast = () => {
  let meal = cookFood();
  return `Eating ${meal}`;
};

const cookFood = () => {
  let items = ["Oatmeal", "Eggs", "Protein", "Shake"];
  return items[Math.floor(Math.random() * items.length)];
};

const wakeUp = () => {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
};

wakeUp();

// Call stack of this function

// wakeUp() -> takeShower() returns -> wakeUp -> eatBreakfast() -> cookFood() returns -> eatBreakfast() returns -> wakeUp() returns

// when returned it is removed from the call stack.
