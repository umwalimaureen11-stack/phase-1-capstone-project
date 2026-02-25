import { getFavorites, saveFavorites } from "./storage.js";

export function addToFavorites(book) {
  const favorites = getFavorites();
  const exists = favorites.find(item => item.id === book.id);
  if (exists) return false;
  
  favorites.push(book);
  saveFavorites(favorites);
  return true;
}