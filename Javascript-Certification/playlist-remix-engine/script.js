const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];


function flattenPlaylists(playlistsArr) {
  if (!Array.isArray(playlistsArr)) {
    return [];
  }

  const newPlayList = [];

  for (let i = 0; i < playlistsArr.length; i++) {
    for (let j = 0; j < playlistsArr[i].length; j++) {
      const {trackId, artist, title, votes, bpm} = playlistsArr[i][j];
      newPlayList.push({trackId, artist, title, votes, bpm, source: [i, j]})
    }
  }

  return newPlayList;
}
// const flatPlaylist = flattenPlaylists(playlists);

function scoreTracks(tracksArr) {
  if (!Array.isArray(tracksArr)) {
    throw new Error("Argument should be an array!");
  }

  const newTracksArr = [];

  for (let i = 0; i < tracksArr.length; i++) {
    const {trackId, artist, title, votes, bpm, source: [...source]} = tracksArr[i];
    newTracksArr.push({
      trackId, 
      artist, 
      title, 
      votes, 
      bpm, 
      source,
      score: votes * 10 - Math.abs(bpm - 120)
    })
  }

  return newTracksArr;
}
// const scoredTracks = scoreTracks(flatPlaylist);

function dedupeTracks(tracksArr) {
  if (!Array.isArray(tracksArr)) {
    throw new Error("Argument should be an array!");
  }

  const newTracksArr = [];
  const tempIndices = [];

  for (let i = 0; i < tracksArr.length; i++) {
    if (!tempIndices.includes(tracksArr[i].trackId)) {
      tempIndices.push(tracksArr[i].trackId);
      newTracksArr.push(tracksArr[i]);
    }
  }

  return newTracksArr;
}
// const uniqueTracks = dedupeTracks(scoredTracks);
// console.log(uniqueTracks);

function enforceArtistQuota(tracksArr, maxOccur) {
  if (!Array.isArray(tracksArr)) {
    throw new Error("Argument 1 should be an array!");
  }
  if (!Number.isInteger(maxOccur)) {
    throw new Error("Argument 2 should be a number");
  }

  const newTracksArr = [];
  const artistCount = {};

  for (let i = 0; i < tracksArr.length; i++) {
    if (!Object.hasOwn(artistCount, `${tracksArr[i].artist}`)) {
      artistCount[tracksArr[i].artist] = 0;
    }
    artistCount[tracksArr[i].artist]++;

    if (!(artistCount[tracksArr[i].artist] > maxOccur)) {
      newTracksArr.push(tracksArr[i]);
    }
  }

  return newTracksArr;
}
// const tracksWithQuota = enforceArtistQuota(uniqueTracks, 1);
// console.log(tracksWithQuota);

function buildSchedule(tracksArr) {
  if (!Array.isArray(tracksArr)) {
    throw new Error("Argument should be an array!");
  }

  const newTracksArr = [];

  for (let i = 0; i < tracksArr.length; i++) {
    newTracksArr.push({
      slot: i + 1,
      trackId: tracksArr[i].trackId
    })
  }

  return newTracksArr;
}
// const schedule = buildSchedule(tracksWithQuota);


function remixPlaylist(playlistsArr, maxNum) {
  if (!Array.isArray(playlistsArr)) {
    throw new Error("Argument 1 should be an array!");
  }
  if (!Number.isInteger(maxNum)) {
    throw new Error("Argument 2 should be a number");
  }

  const flattenedPlaylist = flattenPlaylists(playlistsArr);
  const scoredTracks = scoreTracks(flattenedPlaylist);
  const dedupedTracks = dedupeTracks(scoredTracks);
  const enforcedArtistQuota = enforceArtistQuota(dedupedTracks, maxNum);
  const schedule = buildSchedule(enforcedArtistQuota);

  return schedule;
}

const remix = remixPlaylist(playlists, 1);
console.log(remix);
// [ { slot: 1, trackId: 'trk101' },
//   { slot: 2, trackId: 'trk102' },
//   { slot: 3, trackId: 'trk103' },
//   { slot: 4, trackId: 'trk201' } ]
