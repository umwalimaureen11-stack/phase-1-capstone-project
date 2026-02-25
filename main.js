import { fetchBooks } from "./fetch.js";
import { addToFavorites, isFavorite } from "./favorites.js";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const bookGrid = document.getElementById("book-grid");
const loading = document.getElementById("loading");
const noResults = document.getElementById("no-results");
const gridTitle = document.getElementById("grid-title");
function showLoading() {
  loading.classList.remove("hidden");
  noResults.classList.add("hidden");
  bookGrid.innerHTML = "";
}
function hideLoading() {
  loading.classList.add("hidden");
}

function displayBooks(books, searchQuery = null) {
  hideLoading();
  bookGrid.innerHTML = "";
  
  if (searchQuery) {
    gridTitle.textContent = `Search Results for "${searchQuery}"`;
  } else {
    gridTitle.textContent = "Featured Books";
  }

  if (books.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }