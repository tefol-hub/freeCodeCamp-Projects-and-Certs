const questions = [
  {
    category: "History",
    question: "What year did ww1 start?",
    choices: ["1914", "1850", "1775"],
    answer: "1914"
  },
  {
    category: "Economics",
    question: "Which economic system champions free markets?",
    choices: ["Feudalism", "Capitalism", "Socialism"],
    answer: "Capitalism"
  },
  {
    category: "Politics",
    question: "Which political party won the 2008 US elections?",
    choices: ["The Republican Party", "The Libertarian Party", "The Democratic Party"],
    answer: "The Democratic Party"
  },
  {
    category: "Philosophy",
    question: "Who is the author of the book: Phenomenology of The Spirit?",
    choices: ["Immanuel Kant", "G W F Hegel", "Rene Descartes"],
    answer: "G W F Hegel"
  },
  {
    category: "Geography",
    question: "How many states does the US have?",
    choices: ["100", "60", "50"],
    answer: "50"
  }
];

function getRandomQuestion(questions) {
  const randIndex = Math.floor(Math.random() * questions.length);
  const randQuestion = questions[randIndex];
  return randQuestion;
}

function getRandomComputerChoice(choices) {
  const randIndex = Math.floor(Math.random() * choices.length);
  const randChoice = choices[randIndex];
  return randChoice ;
}

function getResults(question, computerChoice) {
  const result = computerChoice === question.answer ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  return result;
}

const randomQuestion = getRandomQuestion(questions);
console.log(randomQuestion);
console.log();

const randCompChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(randCompChoice);
console.log();

console.log(getResults(randomQuestion, randCompChoice));
