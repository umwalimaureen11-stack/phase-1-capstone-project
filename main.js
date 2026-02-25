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
