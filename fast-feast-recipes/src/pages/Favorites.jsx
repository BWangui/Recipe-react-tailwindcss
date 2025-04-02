// src/pages/Favorites.jsx
import React, { useState } from 'react';
import { useFavorites } from '../FavoritesContext';
import RecipeModal from '../RecipeModal';

function Favorites() {
  const { favorites, removeFavorite, addFavorite } = useFavorites(); // Assuming you have an addFavorite function
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (meal) => {
    setSelectedRecipe(meal);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const handleFavoriteClick = (meal) => {
    // Check if the recipe is already in favorites
    const isFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);
    if (isFavorite) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite(meal);
    }
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
                  onClick={() => handleFavoriteClick(meal)} // Toggle favorite on click
                  className={`mt-2 px-4 py-2 rounded transition-colors ${favorites.some((fav) => fav.idMeal === meal.idMeal) ? 'bg-red-500' : 'bg-white border border-gray-300'}`}
                >
                  {favorites.some((fav) => fav.idMeal === meal.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
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
