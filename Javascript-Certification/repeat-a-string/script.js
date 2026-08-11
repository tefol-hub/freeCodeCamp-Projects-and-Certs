function repeatStringNumTimes(string, number) {
  if (
    !string ||
    typeof string !== "string" ||
    number === undefined ||
    !Number.isInteger(number) 
  ) {
    return `Your first "${string}" or second "${number}" input is invalid. The first input should be a string, the second input should be a number!`;
  }

  let repeatedString = "";
  for (let i = 0; i < number; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

console.log(repeatStringNumTimes("*", 8));  // ********
console.log(repeatStringNumTimes("abc", 3));  // abcabcabc
console.log(repeatStringNumTimes("abc", -2));  // 

console.log(repeatStringNumTimes(4, -2));
// Your first "4" or second "-2" input is invalid. The first input should be a string, the second input should be a number!
