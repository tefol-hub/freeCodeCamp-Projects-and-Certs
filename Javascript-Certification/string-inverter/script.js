function reverseString(string) {
  if (!string || typeof string !== "string" ) {
    return `Your input "${string}" is invalid. It should be a string!`;
  } 

  const reversedString = string.split("").reverse().join("");
  
  return reversedString;
}

console.log(reverseString("hello"));  // olleh
console.log(reverseString("Greetings from Earth"));  // htraE morf sgniteerG
