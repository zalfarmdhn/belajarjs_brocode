// Setup
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

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (records.hasOwnProperty(id)) {
    tracksArr = [];
    if (records.value !== "") {
      if (prop.hasOwnProperty(value)) {
        tracksArr = records[id].tracks;
        tracksArr.push(value);
      } else {
        records[id][prop] = value;
      }
    } else {
      delete records[prop];
    }
  }
  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 5439, 'artist', '');
// updateRecords(recordCollection, 2548, "artist", "");
console.log(recordCollection);
// tracks should have the string Addicted to Love as the last element.

/** 
 * After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element. */