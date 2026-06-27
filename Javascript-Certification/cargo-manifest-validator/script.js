const exampleManifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}

function normalizeUnits(manifest) {

  const manifestCopy = {...manifest};

  if (manifestCopy.unit === "kg") {
    return manifestCopy;
  }

  manifestCopy.weight = manifestCopy.weight * 0.45;
  manifestCopy.unit = "kg";

  return manifestCopy;
}


function validateManifest(manifest) {

  if (!manifest) {
    console.log(`Your argument: ${manifest}`)
    throw new Error("Your argument should be a valid object!");
  }

  const copiedManifest = {...manifest};

  if (typeof manifest.destination === "string") {
    copiedManifest.destination = copiedManifest.destination.trim()
  }
  
  const manifestCopy = new Object();

  if (!Object.hasOwn(copiedManifest, "containerId")) {
    manifestCopy.containerId = "Missing"; 
  } else if (!Number.isInteger(copiedManifest.containerId) || copiedManifest.containerId <= 0) {
    manifestCopy.containerId = "Invalid";
  }

  if (!Object.hasOwn(copiedManifest, "destination")) {
    manifestCopy.destination = "Missing";
  } else if (typeof copiedManifest.destination !== "string" || copiedManifest.destination.length === 0) {
    manifestCopy.destination = "Invalid";
  }

  if (!Object.hasOwn(copiedManifest, "weight")) {
    manifestCopy.weight = "Missing";
  } else if (!Number.isInteger(copiedManifest.weight) || copiedManifest.weight <= 0) {
    manifestCopy.weight = "Invalid";
  }

  if (!Object.hasOwn(copiedManifest, "unit")) {
    manifestCopy.unit = "Missing";
  } else if (copiedManifest.unit !== "lb" && copiedManifest.unit !== "kg") {
    manifestCopy.unit = "Invalid";
  }

  if (!Object.hasOwn(copiedManifest, "hazmat")) {
    manifestCopy.hazmat = "Missing";
  } else if (typeof copiedManifest.hazmat !== "boolean") {
    manifestCopy.hazmat = "Invalid";
  }

  return manifestCopy;
}

function processManifest(manifest) {
  
  if (!manifest) {
    console.log(`Your argument: ${manifest}`)
    throw new Error("Your argument should be a valid object!");
  }

  const copyManifest = {...manifest};

  const copiedManifest = normalizeUnits(copyManifest);
  const validator = validateManifest(copyManifest);

  if (Object.keys(validator).length === 0 && validator.constructor === Object) {
    console.log(`Validation success: ${copiedManifest.containerId}`);
    console.log(`Total weight: ${copiedManifest.weight} kg`)
  } else {
    console.log(`Validation error: ${copiedManifest.containerId}`);
    console.log(validator);
  }

  return validator;
}


console.log(processManifest({ containerId: -88, destination: "Soledad", weight: NaN }));

console.log(processManifest(exampleManifest));

