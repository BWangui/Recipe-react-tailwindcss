// src/RecipeModal.jsx
import React from 'react';

function RecipeModal({ recipe, onClose }) {
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
  // This assumes that the API separates steps by newlines.
  const instructionSteps = recipe.strInstructions
    ? recipe.strInstructions.split('\n').filter(step => step.trim() !== '')
    : [];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Modal container with a background color (blackCoffee) */}
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
      </div>
    </div>
  );
}

export default RecipeModal;
