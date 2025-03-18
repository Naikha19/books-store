document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const booksList = document.getElementById('books');

    // Fetch books from the API and display them
    function fetchBooks() {
        fetch('https://books-store-g58s.onrender.com')
            .then(response => response.json())
            .then(data => {
                booksList.innerHTML = '';  // Clear the list first
                data.forEach(book => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span>${book.title} by ${book.author}</span>
                        <button onclick="deleteBook(${book.id})">Delete</button>
                    `;
                    booksList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }

    // Handle form submission to add a new book
    bookForm.addEventListener('submit', event => {
        event.preventDefault();

        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (title && author) {
            fetch('http://localhost:3001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            })
                .then(response => response.json())
                .then(data => {
                    fetchBooks();  // Refresh the book list
                    titleInput.value = '';
                    authorInput.value = '';
                })
                .catch(error => {
                    console.error('Error adding book:', error);
                });
        }
    });

    // Handle deleting a book
    window.deleteBook = function(id) {
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                fetchBooks();  // Refresh the book list
            })
            .catch(error => {
                console.error('Error deleting book:', error);
            });
    };

    // Initial fetch of books
    fetchBooks();
});
