function arrayValidator(arrayArg) {
  if (!arrayArg || typeof arrayArg !== "object") {
    console.log(`Your array argument ${arrayArg} is invalid!`)
    throw new Error("Array argument should be an array!");
  }
}

function lunchItemValidator(lunchItemArg) {
  if (!lunchItemArg || typeof lunchItemArg !== "string") {
    console.log(`Your Lunch Item argument "${lunchItemArg}" is invalid!`)
    throw new Error("Lunch Item should be a string!");
  }
}

const lunches = [];

// Add to start of array (unshift())
function addLunchToStart(arr, lunchItem) {
  arrayValidator(arr);
  lunchItemValidator(lunchItem);

  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);

  return arr;
}

// Add to end of array (push())
function addLunchToEnd(arr, lunchItem) {
  arrayValidator(arr);
  lunchItemValidator(lunchItem);

  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);

  return arr;
}

// Remove 1st array item (shift())
function removeFirstLunch(arr) {
  arrayValidator(arr);

  if(arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }

  return arr;
}

// Remove last array item (pop())
function removeLastLunch(arr) {
  arrayValidator(arr);

  if(arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }

  return arr;
}

// Random array item (Math.random())
function getRandomLunch(arr) {
  arrayValidator(arr);

  if(arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomArrIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomArrIndex]}`);
  }

  return arr;
}

// Return Array Items
function showLunchMenu(arr) {
  arrayValidator(arr); 

  if(arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    const listOfLunchItems = arr.join(", ");
    console.log(`Menu items: ${listOfLunchItems}`);
  }

  return arr;
}

                         
//Tests (The comments reflect the logged output of each)

console.log(showLunchMenu(lunches), "\n");
// The menu is empty.
// []

console.log(removeFirstLunch(lunches), "\n"); 
// No lunches to remove.
// []

console.log(removeLastLunch(lunches), "\n");
// No lunches to remove.
// []

console.log(addLunchToEnd(lunches, "Tacos"), "\n"); 
// Tacos added to the end of the lunch menu.
// [ 'Tacos' ] 

console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]), "\n"); 
// Noodles removed from the end of the lunch menu.
// [ 'Sushi', 'Pizza' ] 

console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"), "\n");  
// Pizza added to the start of the lunch menu.
// [ 'Pizza', 'Burger', 'Sushi' ] 

console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]))
// Menu items: Pizza, Burger, Fries, Salad
// [ 'Pizza', 'Burger', 'Fries', 'Salad' ]
