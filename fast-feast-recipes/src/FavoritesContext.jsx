// src/FavoritesContext.jsx
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (idMeal) => {
    setFavorites(favorites.filter((recipe) => recipe.idMeal !== idMeal));
  };

  const isFavorite = (idMeal) => {
    return favorites.some((recipe) => recipe.idMeal === idMeal);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
