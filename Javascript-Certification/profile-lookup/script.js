let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  if (
    !name ||
    typeof name !== "string" || 
    !property ||
    typeof property !== "string"
  ) {
    return `Your name "${name}" or property "${property}" inputs are invalid. They should be strings!`;
  }


  let hasName = false;
  let hasProperty = false;

  const matchedContacts = [];
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      hasName = true;
      if (Object.hasOwn(contacts[i], property)) {
        hasProperty = true;
        matchedContacts.push(contacts[i]);
      }
    }
  }

  if (!hasName) {
    return "No such contact";
  }
  if (!hasProperty) {
    return "No such property";
  }

  return matchedContacts[0][property];
}

console.log(lookUpProfile("Akira", "address"));
// No such property
console.log(lookUpProfile("Bob", "potato"));
// No such contact
console.log(lookUpProfile("Sherlock", "likes"));
// [ 'Intriguing Cases', 'Violin' ]

console.log(lookUpProfile("Sherlock", 4));
// Your name "Sherlock" or property "4" inputs are invalid. They should be strings!
