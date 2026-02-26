Book Explorer

A beautiful web application to discover, search, and save your favorite books. Built with JavaScript, Tailwind CSS, and powered by the Open Library API.

 Features

- Search Books: Search for any book by title, author, or keyword
- Browse Featured Books: Discover popular books on the home page
- Save Favorites: Add books to your favorites list (stored locally)
- Responsive Design: Works beautifully on desktop, tablet, and mobile
  


 Prerequisites

- A modern web browser (Chrome, ,  Edge)
- An internet connection (for API calls)



2. Open the application**

   Simply open `index.html` in your web browser:


phase1-capston/
├── index.html          # Main page with search and book grid
├── favorites.html      # Favorites page
├── about.html          # About page
├── main.js             # Main page logic
├── fetch.js            # Open Library API integration
├── favorites.js        # Favorites management
├── storage.js          # LocalStorage handling
├── favoritespage.js    # Favorites page logic
└── README.md           # This file


 How It Works

Search Functionality
1. Enter a search query in the search bar
2. Click "Search" or press Enter
3. Results are fetched from the Open Library API
4. Books are displayed in a responsive grid

 Favorites System
1. Click "Add to Favorites" on any book card
2. Books are saved to your browser's localStorage
3. Access your favorites from the "Favorites" page
4. Remove books from favorites at any time

 Technical Details

 API Integration
The app uses the Open Library Search API:
```
https://openlibrary.org/search.json?q={query}&limit=12
```

 Data Storage
Favorites are stored in the browser's localStorage with the key `favoriteBooks`.



 Open a Pull Request


Acknowledgments

- Open Library for providing the book data API
- Tailwind CSS for the beautiful styling
- Cover Images from Open Library





