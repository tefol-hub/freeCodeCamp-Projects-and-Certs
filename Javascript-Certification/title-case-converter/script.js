function titleCase(string) {
  if (typeof string !== "string" || string.trim().length === 0) {
    throw new Error("Argument should be a non empty string!")
  }

  const trimmedString = string.trim().toLowerCase();
  const stringArr = trimmedString.split(" ");
  let ogString = "";

  for (let i = 0; i < stringArr.length; i++) {
    const firstLetter = stringArr[i].slice(0, 1).toUpperCase();
    let otherLetters = "";

    if (stringArr[i].length > 1) {
      otherLetters = stringArr[i].slice(1);
    }
    
    ogString += firstLetter + otherLetters + " ";
  }

  return ogString.trim();
}

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout
