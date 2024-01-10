const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'The Great Gatsby' },
  { id: 2, title: 'To Kill a Mockingbird' },
  { id: 3, title: 'Pride and Prejudice' },
  { id: 4, title: 'The Catcher in the Rye' }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
