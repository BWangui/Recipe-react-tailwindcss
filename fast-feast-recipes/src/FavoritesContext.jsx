// src/FavoritesContext.jsx
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Add a recipe to the favorites list
  const addFavorite = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    }
  };

  // Remove a recipe from the favorites list
  const removeFavorite = (idMeal) => {
    setFavorites((prevFavorites) => prevFavorites.filter((recipe) => recipe.idMeal !== idMeal));
  };

  // Check if a recipe is already in favorites
  const isFavorite = (idMeal) => favorites.some((recipe) => recipe.idMeal === idMeal);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
