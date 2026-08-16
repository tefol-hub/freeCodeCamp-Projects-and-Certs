function isPalindrome(word) {
  if (
    !word ||
    typeof word !== "string"
  ) {
    return `Your word input "${word}" is invalid. It should be a string!`;
  }

  const reversedWord = word.split('').reverse().join("");
  if (word.toLowerCase() !== reversedWord.toLowerCase()) {
    return false;
  }

  return true;
}


function findPalindromeBreaks(words) {
  if (
    !words ||
    !Array.isArray(words)
  ) {
    return `Your word input "${words}" is invalid. It should be an array!`;
  }

  const nonPalindromeIndices = [];
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      continue;
    }

    if (!nonPalindromeIndices.includes(i)) {
      nonPalindromeIndices.push(i);
    }
  }

  return nonPalindromeIndices;
}


function findRepeatedPhrases(words, phraseLength) {
  if (
    !words ||
    !Array.isArray(words) ||
    !phraseLength ||
    !Number.isInteger(phraseLength) ||
    phraseLength <= 0
  ) {
    return `Your first input "${words}" or second input "${phraseLength}" is invalid. The first input should be an array and the second one a natural number!`;
  }

  const repeatIndices = [];
  if (phraseLength >= words.length) {
    return repeatIndices;
  } 

  outerLoop: for (let i = 0; i <= words.length - phraseLength; i++) {
    console.log(`Loop/Index ${i}`)
    console.log(`Word: ${words[i]}`)
    const phrase = words.slice(i, i + phraseLength).join(" ");

    innerLoop: for (let searchStart = i + 1; searchStart <= words.length - phraseLength; searchStart++) {
      console.log(`Checking from index ${searchStart}`)
      console.log(`nextWord: ${words[searchStart]}`);

      const nextPhrase = words.slice(searchStart, searchStart + phraseLength).join(" ");
      
      console.log(`"${phrase}" VS "${nextPhrase}"`)
      if (phrase === nextPhrase) {
        if (!repeatIndices.includes(i)) {
        repeatIndices.push(i);
        }
        if (!repeatIndices.includes(searchStart)) {
          repeatIndices.push(searchStart);
        }
      }
      
    }
    console.log(repeatIndices)
    console.log();
  }

  return repeatIndices;
}


function analyzeTexts(texts, phraseLength) {
  if (
    !texts ||
    !Array.isArray(texts) ||
    !phraseLength ||
    !Number.isInteger(phraseLength) ||
    phraseLength <= 0
  ) {
    return `Your first input "${texts}" or second input "${phraseLength}" is invalid. The first input should be an array and the second one a natural number!`;
  }

  const finalAnalysis = [];
  if (texts.length === 0) {
    return finalAnalysis;
  }

  for (let i = 0; i < texts.length; i++) {
    const repeatedPhrases = findRepeatedPhrases(texts[i], phraseLength);
    const palindromeBreaks = findPalindromeBreaks(texts[i]);
    finalAnalysis.push({repeatedPhrases, palindromeBreaks})
  }

  return finalAnalysis;
}


const arr = [
  [
    "the", "quick", "brown", "fox",
    "jumps", "over", "the", "lazy", "dog",
    "the", "quick", "brown", "fox",
    "level", "radar", "civic"
  ],

  [
    "she", "went", "to", "the", "market",
    "and", "then", "she", "went", "to", "the", "market",
    "hello", "world", "world", "hello"
  ],

  [
    "one", "two", "three", "four",
    "one", "two", "three", "four",
    "racecar", "madam", "noon"
  ]
];

console.log(analyzeTexts(arr, 3));
