const year = 1900;

function isLeapYear(year) {

  if (Number.isNaN(year)) {
    return "Invalid year value";
  }

  const answer = Number.isInteger(year / 400) ? `${year} is a leap year.`
    : Number.isInteger(year / 100) ? `${year} is not a leap year.`
    : Number.isInteger(year / 4) ? `${year} is a leap year.`
    : `${year} is not a leap year.`;

  return answer;
}

const result = isLeapYear(year);

console.log(result); // 1900 is not a leap year.
console.log(isLeapYear(2000)); // 2000 is a leap year.
console.log(isLeapYear(400)); // 2000 is a leap year.
