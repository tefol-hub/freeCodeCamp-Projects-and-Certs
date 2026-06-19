let count = 0;

function cardCounter(card) {

  if (["J", "Q", "K", "A", 10].includes(card)) {
    --count;
  } else if (card >= 2 && card <= 6) {
    ++count;
  } else if (card >= 7 && card <= 9) {
    count += 0;
  } else {
    count = "Your input is invalid, only the following inputs are allowed: A 2 3 4 5 6 7 8 9 10 J Q K"
  }

  return `${count} ${count > 0 ?  'Bet' : 'Hold'}`;
}

console.log(cardCounter(2)); // 1 Bet
console.log(cardCounter(3)); // 2 Bet
console.log(cardCounter(4)); // 3 Bet 

console.log(cardCounter("J")); // 2 Bet
console.log(cardCounter("K")); // 1 Bet
console.log(cardCounter("Q")); // 0 Hold
console.log(cardCounter("A")); // -1 Hold
console.log(cardCounter(10)); // -2 Hold
