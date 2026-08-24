function bouncer(array) {
  if (!Array.isArray(array)) {
    throw new Error("Argument should be an array!");
  }

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] ) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]
console.log(bouncer(["a", "b", "c"])); // [ 'a', 'b', 'c' ]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [ 1, 2 ]
console.log(bouncer([])); // []
