function confirmEnding(string, subString) {

  if (typeof string !== "string") {
    console.log(`Your 1st argument is a ${typeof string}`);
    return "Invalid Input: your 1st argument should be a string";
  }

  if (typeof subString !== "string") {
    console.log(`Your 2nd argument is a ${typeof subString}`);
    return "Invalid Input: your 2nd argument should be a string";
  }

  const endString = string.slice(-(subString.length));

  return endString === subString;
}

console.log(confirmEnding("Congratulation", "on")); // true

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false

console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")); // false

console.log(confirmEnding("Abstraction", "action")); // true
