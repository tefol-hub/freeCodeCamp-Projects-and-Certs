function arrValidator(arr) {
  let isArrayValid = true;
  if (!arr || !Array.isArray(arr)) {
    isArrayValid = false;
    console.log(`"${arr}" is an invalid input. It should be an array.`);
    return isArrayValid;
  }

  if (
    typeof arr[0] !== "string" || 
    typeof arr[1] !== "string" ||
    arr[0].length === 0 ||
    arr[1].length === 0 
    ) {
      isArrayValid = false;
      console.log(`First 2 values "${arr[0]}" or "${arr[1]}" are invalid. They should strings and should not be empty.`);
      return isArrayValid;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (const char of arr[0].toLowerCase()) {
    if (!alphabet.includes(char)) {
      isArrayValid = false;
      console.log(`Your 1nd array value "${arr[0]}" contains invalid characters. It should only contain alphabet characters.`);
      break;
    }
  }
  for (const char of arr[1].toLowerCase()) {
    if (!alphabet.includes(char)) {
      isArrayValid = false;
      console.log(`Your 2nd array value "${arr[1]}" contains invalid characters. It should only contain alphabet characters.`);
      break;
    }
  }

  return isArrayValid;
}


function mutation(array) {
  let containsLetters = true;
  const isArrValid = arrValidator(array);
  if (!isArrValid) {
    return `Input validator returned "${isArrValid}"!`;
  }

  for (const letter of array[1].toLowerCase()) {
    if (!array[0].toLowerCase().includes(letter)) {
      containsLetters = false;
      break;
    }
  }

  return containsLetters;
}

console.log(mutation(["hello", "hey"]));  //false
console.log(mutation(["Mary", "Army"]));  //true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));  //true

console.log(mutation());
// "undefined" is an invalid input. It should be an array.
// Input validator returned "false"!

console.log(mutation(["", ""]));
// First 2 values "" or "" are invalid. They should strings and should not be empty.
// Input validator returned "false"!
