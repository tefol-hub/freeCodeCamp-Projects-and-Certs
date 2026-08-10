function findLongestWordLength(sentence) {
  const errorMessage = `Your input "${sentence}" is invalid. It should be a string!`;

  if (typeof sentence !== "string") {
    return errorMessage;
  }

  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) {
    return errorMessage;
  }

  const sentenceArr = trimmedSentence.split(" ");
  let longestWordLength = 0;

  for (let i = 0; i < sentenceArr.length; i++) {
    if (longestWordLength < sentenceArr[i].length) {
      longestWordLength = sentenceArr[i].length;
    }
  }

  return longestWordLength ? longestWordLength : errorMessage;
}

console.log(findLongestWordLength("Googling do a barrel roll"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
