const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(parVal, strokes) {

  const invalidLog = `Invalid, par: ${parVal}, strokes: ${strokes}.`;

  if (!parVal || !strokes) {
    console.log(invalidLog);
    return "Your par and strokes arguments are invalid!";
  }

  if (!Number.isInteger(parVal) || !Number.isInteger(strokes)) {
    console.log(invalidLog);
    return "Your par and strokes arguments should be valid whole numbers";
  }

  if (parVal <= 0 || strokes <= 0) {
    console.log(invalidLog);
    return "Your par and strokes arguments should be natural numbers";
  }

  const [holeInOne, eagle, birdie, par, bogey, doubleBogey, goHome] = names;

  const result = strokes === 1 ? holeInOne
    : strokes <= parVal - 2 ? eagle
    : strokes === parVal - 1 ? birdie
    : strokes === parVal ? par
    : strokes === parVal + 1 ? bogey
    : strokes === parVal + 2 ? doubleBogey
    : strokes >= parVal + 3 ? goHome
    : `${strokes} is an invalid strokes value`;

  return result;
}

console.log(golfScore(4, 1)); // Hole-in-one!
console.log(golfScore(5, 2)); // Eagle
console.log(golfScore(4, 3)); // Birdie
console.log(golfScore(4, 4)); // Par
console.log(golfScore(4, 5)); // Bogey
console.log(golfScore(3, 5)); // Double Bogey
console.log(golfScore(5, 9)); // Go Home!
