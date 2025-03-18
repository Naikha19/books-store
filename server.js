// server.js
const express = require('express');
const app = express();
const path = require("path")
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for books
let books = [];
let currentId = 1;

// Route to add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    const newBook = { id: currentId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Route to get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to delete a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books.splice(index, 1);
    res.status(200).json({ message: 'Book deleted successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});