function largestOfAll(arr) {
  if (!arr || !Array.isArray(arr)) {
    return `Your input "${arr}" is invalid. It should be an array!`;
  }

  const largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = (-Infinity);
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    largestNums.push(largestNum);
  }

  return largestNums;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [ 5, 27, 39, 1001 ]
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
// [ 25, 48, 21, -3 ]
