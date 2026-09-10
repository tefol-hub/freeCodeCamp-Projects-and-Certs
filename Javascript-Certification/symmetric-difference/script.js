function diffArray(arr1, arr2) {
  return [...arr1.filter(val => !arr2.includes(val)), ...arr2.filter(val => !arr1.includes(val))];
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// [ 'pink wool' ]

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
//[ 'diorite', 'pink wool' ]
