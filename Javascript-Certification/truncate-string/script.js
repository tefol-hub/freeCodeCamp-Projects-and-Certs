function truncateString(string, number) {

  if (typeof string !== "string") {
    console.log(`Your 1st argument is a ${typeof number}`);
    return "Error: the 1st argument should be a string!";
  }

  if (typeof number !== "number") {
    console.log(`Your 2nd argument is a ${typeof number}`);
    return "Error: the 2nd argument should be a number";
  }

  const numOfLetters = string.length - number;

  const finalString = (string.length > number) 
    ? string.replace(
        string.slice(-(numOfLetters)),
        "..."
      )
    : string;

  return finalString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Peter Piper...

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // A-tisket a-tasket A green and yellow basket
