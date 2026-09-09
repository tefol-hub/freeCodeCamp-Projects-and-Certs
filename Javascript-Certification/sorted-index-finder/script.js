function getIndexToIns(array, number) {
  const indexToIns = array.sort((a, b) => a - b).findIndex(num => num >= number);
  return indexToIns > -1 ? indexToIns : array.length;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19)); // 2
console.log(getIndexToIns([3, 10, 5], 11)); // 3
console.log(getIndexToIns([], 5)); // 0
