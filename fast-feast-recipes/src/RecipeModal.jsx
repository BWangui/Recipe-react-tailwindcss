// src/RecipeModal.jsx
import React from 'react';
import { useFavorites } from './FavoritesContext'; // Assuming the context is in the same folder

function RecipeModal({ recipe, onClose }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  if (!recipe) return null;

  // Extract ingredients and measures into an ordered array
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  // Split the recipe instructions into steps based on newline characters.
  const instructionSteps = recipe.strInstructions
    ? recipe.strInstructions.split('\n').filter(step => step.trim() !== '')
    : [];

  // Check if the recipe is already in favorites
  const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(recipe.idMeal); // Remove from favorites
    } else {
      addFavorite(recipe); // Add to favorites
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Modal container */}
      <div className="bg-blackCoffee rounded-lg shadow-lg max-w-3xl w-full relative p-6 overflow-y-auto max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-black">{recipe.strMeal}</h2>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded mb-4"
        />
        {/* Ingredients Section */}
        <h3 className="text-xl font-bold mb-2 text-black">Ingredients:</h3>
        <ol className="list-decimal list-inside mb-4">
          {ingredients.map((ing, index) => (
            <li key={index} className="text-lg text-black font-bold">{ing}</li>
          ))}
        </ol>
        {/* Recipe Instructions Section */}
        <h3 className="text-xl font-bold mb-2 text-black">Recipe:</h3>
        {instructionSteps.length > 0 ? (
          <ol className="list-decimal list-inside mb-4">
            {instructionSteps.map((step, index) => (
              <li key={index} className="text-lg text-black font-bold">{step}</li>
            ))}
          </ol>
        ) : (
          <p className="text-lg text-black font-bold">{recipe.strInstructions}</p>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`mt-4 px-4 py-2 rounded-full transition-colors ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-white border border-gray-300'
          }`}
        >
          <button
  onClick={() => addFavorite(recipe.idMeal)}
  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
>
  Add to Favorites
</button>

          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default RecipeModal;
