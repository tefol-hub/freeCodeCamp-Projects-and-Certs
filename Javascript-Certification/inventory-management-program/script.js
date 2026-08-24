const inventory = [];

function findProductIndex(prodName) {
  if (typeof prodName !== "string") {
    throw new Error("Argument should be a stringg!");
  }

  const lowerCaseName = prodName.toLowerCase();
  
  for (let i = 0; i < inventory.length; i++) {
    if (lowerCaseName === inventory[i].name) {
      return i;
    }
  }

  return -1;
}


function addProduct(prodObj) {
  if (typeof prodObj !== "object") {
    throw new Error("Argument shoulf be an object!");
  }

  const productFoundIndex = findProductIndex(prodObj.name);
  const normalizedName = prodObj.name.toLowerCase();

  if (productFoundIndex > -1) {
    inventory[productFoundIndex].quantity += prodObj.quantity;
    console.log(`${normalizedName} quantity updated`);
  }

  if (productFoundIndex === -1) {
    inventory.push({name: normalizedName, quantity: prodObj.quantity});
    console.log(`${normalizedName} added to inventory`);
  }
}


function removeProduct(prodName, prodQty) {
  if (typeof prodName !== "string") {
    throw new Error("Argument should be a stringg!");
  }
  if (!Number.isInteger(prodQty)) {
    throw new Error("Argument should be a number!");
  }
  
  const productFoundIndex = findProductIndex(prodName);
  const normalizedName = prodName.toLowerCase();
  // let isProdPresent = false;

  if (productFoundIndex > -1) {
    if (inventory[productFoundIndex].quantity < prodQty) {
      console.log(`Not enough ${normalizedName} available, remaining pieces: ${inventory[productFoundIndex].quantity}`);
    }

    if (inventory[productFoundIndex].quantity >= prodQty) {
      inventory[productFoundIndex].quantity -= prodQty;
      console.log(`Remaining ${normalizedName} pieces: ${inventory[productFoundIndex].quantity}`);
    }

    if (inventory[productFoundIndex].quantity === 0) {
      inventory.splice(productFoundIndex, 1);
    }
  }

  if (productFoundIndex === -1) {
    console.log(`${normalizedName} not found`);
  }
}

console.log(findProductIndex("Flour")); // -1
addProduct({name: "FLOUR", quantity: 5}); // flour added to inventory
addProduct({name: "FLOUR", quantity: 5}); // flour quantity updated
removeProduct("FLOUR", 10) // Remaining flour pieces: 0
