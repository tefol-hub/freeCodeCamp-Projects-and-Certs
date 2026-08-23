function pyramid(char, rows, isFacingDown) {
  if (
    typeof char !== "string" ||
    char.trim().length === 0 
  ) {
    throw new Error("1st argument should be a non-empty string!");
  }
  if (
    !Number.isInteger(rows) ||
    rows < 0
  ) {
    throw new Error("2nd argument should be a positive number!");
  }
  if (
    typeof isFacingDown !== "boolean" ||
    isFacingDown === undefined
  ) {
    throw new Error("3rd argument should be a boolean!");
  }

  let pyramidString = "\n";

  if (isFacingDown) {
    let spaces = 0;
    for (let i = rows - 1; i >= 0; i--) {
      pyramidString += (" ".repeat(spaces) + char.repeat(1 + (i * 2)) + "\n");
      spaces++;
    }
  }

  if (!isFacingDown) {
    let spaces = rows - 1;
    for (let i = 0; i < rows; i++) {
      pyramidString += (" ".repeat(spaces) + char.repeat(1 + (i * 2)) + "\n");
      spaces--;
    }
  }

  return pyramidString;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
