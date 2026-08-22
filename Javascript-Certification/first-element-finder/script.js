function findElement(arr, func) {
  if (
    !arr || 
    !Array.isArray(arr) ||
    !func ||
    typeof func !== "function"
  ) {
    return `Your 1st input "${arr}" or 2nd input "${func} is invalid." The 1st input should be an array and the 2nd input a valid function!`
  }

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // 8
console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; })); // javascript
console.log(findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; })) // undefined
