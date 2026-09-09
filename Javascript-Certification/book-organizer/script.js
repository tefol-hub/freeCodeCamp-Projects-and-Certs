const books = [
  {
    title: "Human Action: A Treatise on Economics",
    authorName: "Ludwig von Mises",
    releaseYear: 1949
  },
  {
    title: "Democracy: The God That Failed",
    authorName: "Hans-Hermann Hoppe",
    releaseYear: 2001
  },
  {
    title: "Socialism: An Economic and Sociological Analysis",
    authorName: "Ludwig von Mises",
    releaseYear: 1922
  },
  {
    title: "Economics in One Lesson: The God Shortest and Surest Way to Understand Basic Economics",
    authorName: "Henry Hazlitt",
    releaseYear: 1946
  },
  {
    title: "Race And Culture: A World View",
    authorName: "Thomas Sowell",
    releaseYear: 1994
  }, 
  {
    title: "The Bell Curve: Intelligence and Class Structure in Amercian Life",
    authorName: "Richard J. Hernstein and Charles Murray",
    releaseYear: 1994
  }
];


function sortByYear(book1, book2) {
  return book1.releaseYear === book2.releaseYear ? 0
  : book1.releaseYear > book2.releaseYear ? 1 
  : -1;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
// [ { title: 'Socialism: An Economic and Sociological Analysis',
//     authorName: 'Ludwig von Mises',
//     releaseYear: 1922 },
//   { title: 'Economics in One Lesson: The God Shortest and Surest Way to Understand Basic Economics',
//     authorName: 'Henry Hazlitt',
//     releaseYear: 1946 },
//   { title: 'Human Action: A Treatise on Economics',
//     authorName: 'Ludwig von Mises',
//     releaseYear: 1949 } ]
