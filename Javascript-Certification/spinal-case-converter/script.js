function spinalCase(string) {
  return string.replace(
    /(?<=[a-z])[A-Z]/g,
    match => `-${match.trim().toLowerCase()}`
  ).replace(/_|\s/g, "-").toLowerCase();
}

console.log(spinalCase("ProductLanding page")); // product-landing-page 
console.log(spinalCase("This Is Spinal Tap")); // this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); // this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); // the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); // teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); // all-the-small-things
