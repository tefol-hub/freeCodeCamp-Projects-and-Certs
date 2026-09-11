function smallestCommons(array) {
  const seqArr = array.sort((a, b) => a - b);
  const allNumsArr = [];

  for (let i = seqArr[0]; i <= seqArr[1]; i++) {
    allNumsArr.push(i);
  }

  let lcm = 0;
  let isLCM = false;

  while(!isLCM) {
    lcm += allNumsArr[allNumsArr.length - 1];
    isLCM = allNumsArr.every(num => lcm % num === 0);
  }

  return lcm;
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([23, 18])); // 6056820
console.log(smallestCommons([5, 1])); // 60
