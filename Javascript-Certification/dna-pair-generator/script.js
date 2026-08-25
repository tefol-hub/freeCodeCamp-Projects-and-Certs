function pairElement(string) {
  if (typeof string !== "string") {
    throw new Error("Argument should be a string!");
  }

  const arrDNA = [];

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "A":
        arrDNA.push(["A", "T"]);
        break;
      case "T":
        arrDNA.push(["T", "A"]);
        break;
      case "C":
        arrDNA.push(["C", "G"]);
        break;
      case "G":
        arrDNA.push(["G", "C"]);
        break;
      default:
        console.log(`"${string[i]}" is not a valid base!"`);
    }
  }

  return arrDNA;
}

console.log(pairElement("ATCGA"));
// [ [ 'A', 'T' ],
  // [ 'T', 'A' ],
  // [ 'C', 'G' ],
  // [ 'G', 'C' ],
  // [ 'A', 'T' ] ]
