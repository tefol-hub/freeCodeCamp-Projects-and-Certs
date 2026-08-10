const num = 10;

function factorialCalculator(num) {
  if (!num || typeof num !== "number") {
    return `"${num}" is an Invalid input. The input should be a number.`
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  } 

  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
