function frankenSplice(arr1, arr2, index) {
  if (
    !arr1 ||
    !Array.isArray(arr1) ||
    !arr2 ||
    !Array.isArray(arr2) ||
    !Number.isInteger(index) ||
    index < 0
  ) {
    throw new Error("Invalid arguments. arr1 and arr2 must be arrays, and index must be a positive number!");
  }

  if (index > arr2.length) {
    throw new Error("The 3rd argument 'index' should not be larger than the length of the 2st argument 'arr2'!");
  }

  const newArr = [
    ...arr2.slice(0, index), 
    ...arr1, 
    ...arr2.slice(index)
  ]

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// [ 4, 1, 2, 3, 5 ]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
console.log(frankenSplice([1, 2, 3, 4], [], 0));
// [ 1, 2, 3, 4 ]
