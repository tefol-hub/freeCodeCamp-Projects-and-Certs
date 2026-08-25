function uniteUnique(...arrays) {
  const newArray = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (!newArray.includes(arrays[i][j])) {
        newArray.push(arrays[i][j]);
      }
    }
  }

  return newArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); 
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));


// CONSOLE OUTPUT
// [ 1, 3, 2, 5, 4 ]
// [ 1, 2, 3, 5 ]
// [ 1, 2, 3, 5, 4, 6, 7, 8 ]
// [ 1, 3, 2, 5, 4, 6 ]
// [ 1, 3, 2, 5, 4 ]
