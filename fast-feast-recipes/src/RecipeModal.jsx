// src/RecipeModal.jsx
import React from 'react';
import { useFavorites } from './FavoritesContext'; // Ensure context is imported

function RecipeModal({ recipe, onClose }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites(); // Access context functions and state

  if (!recipe) return null;

  const handleFavoriteClick = () => {
    if (isFavorite(recipe.idMeal)) {
      removeFavorite(recipe.idMeal); // Remove from favorites
    } else {
      addFavorite(recipe); // Add to favorites
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6 overflow-y-auto max-h-screen">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{recipe.strMeal}</h2>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
        <ol className="list-decimal list-inside mb-4">
          {Object.keys(recipe)
            .filter(key => key.startsWith('strIngredient') && recipe[key])
            .map((key, index) => (
              <li key={index} className="text-lg">{recipe[key]}</li>
            ))}
        </ol>

        <h3 className="text-xl font-bold mb-2">Instructions:</h3>
        <p className="text-lg">{recipe.strInstructions}</p>

        <button
          onClick={handleFavoriteClick} // Toggle favorite on click
          className={`mt-4 px-4 py-2 rounded-full transition-colors ${
            isFavorite(recipe.idMeal) ? 'bg-red-500 text-white' : 'bg-white border border-gray-300'
          }`}
        >
          {isFavorite(recipe.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default RecipeModal;
