function steamrollArray(array) {
  const newArr = [];
  function filterArrs(array) {
    array.forEach(val => Array.isArray(val) ? filterArrs(val) : newArr.push(val))
    return newArr;
  }

  return filterArrs(array);
}

console.log(steamrollArray([[["a"]], [["b"]]])); // [ 'a', 'b' ]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [ 1, 2, 3, 4 ]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [ 1, 3, 4 ]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [ 1, {}, 3, 4 ]

