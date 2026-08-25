function sumFibs(num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error("Argument should be a natural number!");
  }

  const tempFibs = [0, 1];
  let sumOddFibs = 0;
  let sum = 0;
  for (let i = 0; sum <= num; i++) {
    if (tempFibs[i + 1] % 2 !== 0 && tempFibs[i + 1] <= num) {
      sumOddFibs += tempFibs[i + 1];
    }
    sum = tempFibs[i] + tempFibs[i + 1];
    tempFibs.push(sum);
  }

  return sumOddFibs;
}



console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(1)); // 2
console.log(sumFibs(4)); // 5
console.log(sumFibs(72025)); // 60696
