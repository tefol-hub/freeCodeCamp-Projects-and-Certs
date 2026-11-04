function translatePigLatin(string) {
  const regex = /^([b-df-hj-np-tv-z]+)([aeiou]+\w+)?$/gi;
  const vowelStart = /^[aeiou]/gi;

  return vowelStart.test(string) 
    ? `${string}way`
    : string.replace(regex, "$2$1ay");
}

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("eight")); // eightway
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("rhythm")); // rhythmay