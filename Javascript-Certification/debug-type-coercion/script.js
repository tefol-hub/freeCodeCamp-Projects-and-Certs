// Original code With bugs that I commented out

// const firstResult = 5 + "10";
// console.log(`5 + 10 = ${firstResult}`);

// const secondResult = "Eight" - 5;
// console.log(`8 - 5 = ${secondResult}`);

// const thirdResult = true + 5;
// console.log(`1 + 5 = ${thirdResult}`);

// const fourthResult = false + 8;
// console.log(`0 + 8 = ${fourthResult}`);

// const fifthResult = "10" * 2;
// console.log(`10 * 2 = ${fifthResult}`);

// const sixthResult = null + 22;
// console.log(`0 + 22 = ${sixthResult}`);


// Debugged version of the code above

// removed quotes around 10 to make it type number
const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

// Used 8 (type number) instead of "Eight"
const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

// Replaced bool with 1 (type number)
const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

// Replaced bool with 0 (type number)
const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

// Removed the quotes from "10"
const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

// Replaced null with the number 0
const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);