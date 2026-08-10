function chunkArrayInGroups(arr, num) {
  if (
    !arr ||
    !Array.isArray(arr) ||
    !num ||
    !Number.isInteger(num) ||
    num <= 0
  ) {
    return `Your 1st input: "${arr}" or 2nd input: "${num}" is invalid. The 1st input should be an array and the 2nd input should be a natural number greater than 0!`
  }

  const chunkyArray = [];
  for (let i = 0; i < arr.length; i += num) {
    const arrChunk = arr.slice(i, i + num);
    chunkyArray.push(arrChunk);
  }

  return chunkyArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]

console.log(chunkArrayInGroups("5", Infinity));
// Your 1st input: "5" or 2nd input: "Infinity" is invalid. The 1st input should be an array and the 2nd input should be a natural number greater than 0!
