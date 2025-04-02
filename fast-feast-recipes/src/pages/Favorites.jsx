// src/pages/Favorites.jsx
import React, { useState } from 'react';
import { useFavorites } from '../FavoritesContext';
import RecipeModal from '../Recipemodal';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (meal) => {
    setSelectedRecipe(meal);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const handleFavoriteClick = (meal) => {
    removeFavorite(meal.idMeal); // Remove from favorites
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-accent">Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <div className="text-center text-text">No favorites added yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => handleCardClick(meal)}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-accent">{meal.strMeal}</h2>
                <button
                  onClick={() => handleFavoriteClick(meal)} // Remove from favorites on click
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeModal} />}
    </div>
  );
}

export default Favorites;
