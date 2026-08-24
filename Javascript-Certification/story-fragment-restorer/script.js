const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];


function compactFragments(fragments) {
  if (!Array.isArray(fragments)) {
    throw new Error("Argument should be an array!");
  }

  const newFragments = [];

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] === undefined) {
      console.log(`[COMPACTED] fragment at id ${i}`);
      continue;
    }

    const newFragment = {
      id: fragments[i]['id'], 
      text: fragments[i]['text']
    }
    newFragments.push(newFragment);
  }

  return newFragments;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);
// console.log(compactedShuffledFragments);


function sortFragments(fragments) {
  if (!Array.isArray(fragments)) {
    throw new Error("Argument should be an array!");
  }

  const newFragments = [...fragments]

  for (let i = 0; i < newFragments.length - 1; i++) {
    for (let j = 0; j < newFragments.length - 1 - i; j++) {
      if (newFragments[j + 1].id < newFragments[j].id) {
        newFragments[j] = newFragments.splice(j + 1, 1, newFragments[j])[0];
      }
    }
  }

  return newFragments;
}

const sortedFragments = sortFragments(compactedShuffledFragments);


function dedupeFragments(fragments) {
  if (!Array.isArray(fragments)) {
    throw new Error("Argument should be an array!");
  }

  const uniqueFragments = [];
  const uniqueIDs = [];

  for (let i = 0; i < fragments.length; i++) {
    if (uniqueIDs.includes(fragments[i].id)) {
      console.log(`[DEDUPED] fragment at id ${i}`);
      continue;
    }
    uniqueIDs.push(fragments[i].id);
    uniqueFragments.push(fragments[i]);
  }

  return uniqueFragments;
}

const dedupedFragments = dedupeFragments(sortedFragments);
// console.log(dedupedFragments);


function fillMissingFragments(fragments) {
  if (!Array.isArray(fragments)) {
    throw new Error("Argument should be an array!");
  }

  const filledArray = [...fragments];

  for (let i = 0; i < filledArray.length; i++) {
    if ((i + 1) !== filledArray[i].id) {
      filledArray.splice(i, 0, {id: i + 1, text: "[...]"});
      console.log(`[FILLED] fragment at index ${i}`);
    }
  }

  return filledArray;
}

const filledFragments = fillMissingFragments(dedupedFragments)
// console.log("\n", filledFragments);


function assembleStory(fragments) {
  if (!Array.isArray(fragments)) {
    throw new Error("Argument should be an array!");
  }

  let story = "";

  for (let i = 0; i < fragments.length; i++) {
    story += fragments[i].text;
    if (i !== fragments.length - 1) {
      story += "\n";
    }
  }

  return story;
}

console.log(assembleStory(filledFragments));

console.log(assembleStory([{ id: 1, text: "Hello" }, { id: 2, text: "World" }]));
