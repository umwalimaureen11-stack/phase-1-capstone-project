import { getFavorites } from "./storage.js";
import { removeFromFavorites } from "./favorites.js";

const favoritesContainer = document.getElementById("favorites-container");
const emptyMessage = document.getElementById("empty-message");

function displayFavorites() {
  const favorites = getFavorites();
  
  if (favorites.length === 0) {
    emptyMessage.classList.remove("hidden");
    favoritesContainer.innerHTML = "";
    return;
  }