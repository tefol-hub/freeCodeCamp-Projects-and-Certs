const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];


function parseShipment(rawData) {
  if (
    !rawData || 
    !Array.isArray(rawData) ||
    rawData.length <= 0
  ) {
    return `Your input ${rawData} is invalid. It should be a non-empty array!`;
  }

  const pantryItems = [];
  const skuValues = [];
  for (let i = 0; i < rawData.length; i++) {
    const pantryItemArr = rawData[i].split("|");
    if (skuValues.includes(pantryItemArr[0])) {
      continue;
    }
    skuValues.push(pantryItemArr[0]);
    pantryItemArr[2] = parseInt(pantryItemArr[2]);
    const [sku, name, qty, expires, zone = "general"] = pantryItemArr;
    const pantryItem = {sku, name, qty, expires, zone};
    pantryItems.push(pantryItem);
  }

  return pantryItems;
}
const shipment = parseShipment(rawData);


function clonePantry(pantry) {
  if (
    !pantry || 
    !Array.isArray(pantry) ||
    pantry.length <= 0
  ) {
    return `Your input ${pantry} is invalid. It should be a non-empty array!`;
  }

  const cloneArray = [];
  for (let i = 0; i < pantry.length; i++) {
    cloneArray.push({...pantry[i]});
  }

  return cloneArray;
}
const clonedShipment = clonePantry(shipment);
const clonedPantry = clonePantry(pantry);


function planRestock(pantry, shipment) {
  if (
    !pantry ||
    !Array.isArray(pantry) || 
    !shipment ||
    !Array.isArray(shipment) ||
    shipment.length <= 0
  ) {
    return `Your 1st input "${pantry}" or 2nd input "${shipment}" is invald. The should both be arrays and the second one should not be empty!`;
  }

  const actions = [];
  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    
    let type = "donate";
    if (item.qty <= 0) {
      type = "discard";
    }
    for (let i = 0; i < pantry.length; i++) {
      if ((item.sku === pantry[i].sku) && item.qty > 0) {
        type = "restock";
        continue;
      }
    }
    actions.push({type, item});
  }

  return actions;
}
const pantryRestock = planRestock(clonedPantry, clonedShipment);


function groupByZone(actions) {
  if (
    !actions ||
    !Array.isArray(actions) ||
    actions.length <= 0
  ) {
    return `Your actions input "${actions}" is invalid. It should be an object that is not empty!`;
  }

  const zoneGroups = {};
  for (let i = 0; i < actions.length; i++) {
    const zoneGroup = actions[i].item.zone;
    if (!Object.hasOwn(zoneGroups, zoneGroup)) {
      zoneGroups[zoneGroup] = [];
    }
    zoneGroups[zoneGroup].push(actions[i]);
  }

  return zoneGroups;
}

const groupedZones = groupByZone(pantryRestock);
console.log(groupedZones);
