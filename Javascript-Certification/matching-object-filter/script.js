function whatIsInAName(arr, srcObj) {
  return arr.filter(obj => {
    for (const prop in srcObj) {
      if (obj[prop] !== srcObj[prop]) {
        return false;
      }
    }
    return true;
  })
}


console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
// [ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
// [ { first: 'Tybalt', last: 'Capulet' } ]
