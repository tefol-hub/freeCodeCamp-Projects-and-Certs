const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {

  console.log(prop)

  if (value === "") {
    console.log("if 1");
    delete records[id][prop];
  }

  if (prop !== "tracks" && value !== "") {
    console.log("if 2");
    records[id][prop] = value;
    console.log(records[id]);
  }

  if (prop === "tracks" && value !== "") {
    console.log("if 3");
    if (!Object.hasOwn(records[id], prop)) {
      console.log("if 3.1");
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  } else if (prop === "tracks" && value !== "") {
    console.log("if 4");
    records[id][prop].push(value);
  }

  return records;
}


console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), "\n \n");

console.log(updateRecords(recordCollection, 2548, "tracks", ""), "\n \n");

console.log(updateRecords(recordCollection, 2468, "tracks", "Free"), "\n \n");

