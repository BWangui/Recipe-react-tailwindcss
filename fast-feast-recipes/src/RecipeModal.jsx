// src/RecipeModal.jsx
import React from 'react';

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6 overflow-y-auto max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-accent">{recipe.strMeal}</h2>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-text mb-4">{recipe.strInstructions}</p>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-secondary">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];
              return (
                ingredient && ingredient.trim() && (
                  <li key={i}>
                    {ingredient} - {measure}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
