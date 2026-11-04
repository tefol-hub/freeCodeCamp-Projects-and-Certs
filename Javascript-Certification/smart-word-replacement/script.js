function myReplace(sentence, word, replace) {
  if (
    typeof sentence !== "string" ||
    typeof word !== "string" ||
    typeof replace !== "string" 
  ) {
    throw new Error("Invalid Arguments");
  }

  
  return sentence.replace(
    word, 
    match => {
      if (/^[A-Z]/.test(match)) {
        return replace[0].toUpperCase() + replace.slice(1);
      }
      return replace[0].toLowerCase() + replace.slice(1);
    }
  );
}

console.log(myReplace("Let us go to the store", "store", "mall"));
// Let us go to the mall
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down"));
// I think we should look down there
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// This has a spelling error
console.log(myReplace("His name is Tom", "Tom", "john"));
// His name is John
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// Let us get back to more Algorithms