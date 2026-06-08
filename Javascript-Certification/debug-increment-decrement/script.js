//Buggy Version
// let counter = 10;
// console.log(`Counter is currently ${counter}`); 

// let updatedCounter = counter++;
// console.log(`Counter is now ${updatedCounter}`); // returned 10

// let score = 8;
// console.log(`Score is currently ${score}`);

// let finalScore = ++score;
// console.log(`Score is still ${finalScore}`); // returned 9

// let coins = 3;
// console.log(`Coins is currently ${coins}`);

// let updatedCoins = coins--;
// console.log(`Coins is now ${updatedCoins}`); // returned 3

// let health = 7;
// console.log(`Health is currently ${health}`);

// let newHealth = --health;
// console.log(`Health is still ${newHealth}`); // returned 6


// Debugged Solution
let counter = 10;
console.log(`Counter is currently ${counter}`);

//Used prefix notation for increment operator
let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

//Used postfix notation for increment operator
let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

//Used prefix notation for decrement operator
let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

//Used postfix notation for decrement operator
let newHealth = health--;
console.log(`Health is still ${newHealth}`);