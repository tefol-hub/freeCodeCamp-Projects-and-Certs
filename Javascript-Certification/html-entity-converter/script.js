function convertHTML(string) {
  if (typeof string !== "string") {
    throw new Error("Argument should be a string!");
  }

  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let char = "";
    switch (string[i]) {
      case "&": 
        char = "&amp;";
        break;
      case "<":
        char = "&lt;";
        break;
      case ">":
        char = "&gt;";
        break;
      case '"':
        char = "&quot;";
        break;
      case "'":
        char = "&apos;";
        break;
      default:
        char = string[i];
    }
    newString += char;
  }

  return newString;
}


console.log(convertHTML("Dolce & Gabbana"));
