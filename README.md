# Book Management App

A simple book management app built with Node.js, Express, and a basic front-end.

## Features
- Add a new book with a title and author
- View all added books
- Delete a book by ID

## Technologies Used
- Node.js
- Express.js
- HTML, CSS, JavaScript (Front-end)
- GitHub for version control

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/book-management-app.git
   cd book-management-app

2. ## Install dependencies 
   npm install

3. ## Run the server
   node server.js

4. ## Open the application
   The server will start at http://localhost:3000
   Open a browser and navigate to http://localhost:3000

## API Endpoints
   Method	Endpoint	Description
   POST	   /books	Add a new book (expects { title, author } in request body)
   GET	   /books	Retrieve all books
   DELETE	/books/:id	Delete a book by ID

## Contributing
   Feel free to fork the repository, open issues, or submit pull requests.

## License
   This project is licensed under the MIT License.

