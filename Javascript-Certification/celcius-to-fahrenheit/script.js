function convertCtoF(tempInC) {

  if (!Number.isFinite(tempInC)) {
    return "Invalid input, not a number!"
  } 

  const fahrenheit = tempInC * (9/5) + 32;

  return fahrenheit;
}

console.log(convertCtoF(-10)) //Output: 14
