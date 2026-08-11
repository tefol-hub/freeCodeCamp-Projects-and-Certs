// Error handling functions
function inputValidator(input) {
  if (!input || typeof input !== "string") {
    console.log(`Your input "${input}" is invalid. It should be a string!`);
    return false;
  }

  const lowerCaseInput = input.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (const char of lowerCaseInput) {
    if (!alphabet.includes(char)) {
      console.log(`Your input "${lowerCaseInput}" contains an invalid character(s). It should only contain alphabet characters!`);
      return false;
    }
  }
  
  for (let i = 1; i < lowerCaseInput.length; i++) {
    const previousLetterIndex = alphabet.indexOf(lowerCaseInput[i - 1]);
    const currentLetterIndex = alphabet.indexOf(lowerCaseInput[i]);
    if (currentLetterIndex < previousLetterIndex) {
      console.log(`Your input "${lowerCaseInput}" contains letters that are not in alphabetic order!`);
      return false;
    }
  }
  return true;
}


// Function detects missing Letter 
function fearNotLetter(lettersInput) {
  const isValid = inputValidator(lettersInput);
  if (!isValid) {
    return `Invalid Input!`;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = lettersInput.toLowerCase();
  const firstLetter = letters[0];
  const secondLetter = letters[letters.length - 1];
  const firstLetterIndex = alphabet.indexOf(firstLetter);
  const secondLetterIndex = alphabet.indexOf(secondLetter);
  const rangeOfLetters = alphabet.slice(firstLetterIndex, secondLetterIndex + 1);
  
  let missingLetter = undefined;
  for (let i = 0; i < rangeOfLetters.length; i++) {
    if (!letters.includes(rangeOfLetters[i])) {
      missingLetter = rangeOfLetters[i];
      break;
    }
  }

  return missingLetter;
}


console.log(fearNotLetter("stvwx")) // u
console.log(fearNotLetter("abce")) // d
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
// undefined

// EDGE CASES HANDLED
console.log();
console.log(fearNotLetter());
// Your input "undefined" is invalid. It should be a string!
// Invalid Input!
console.log(fearNotLetter(5));
// Your input "5" is invalid. It should be a string!
// Invalid Input!
console.log(fearNotLetter(" "));
// Your input " " contains an invalid character(s). It should only contain alphabet characters!
// Invalid Input!
console.log(fearNotLetter("dgf"));
// Your input "dgf" contains letters that are not in alphabetic order!
// Invalid Input!
