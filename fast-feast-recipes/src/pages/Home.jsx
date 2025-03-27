// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import RecipeModal from '../RecipeModal';
import { useFavorites } from '../FavoritesContext';
import { FiHeart } from 'react-icons/fi';

function Home() {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    if (!searchTerm) {
      setMeals([]);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch recipes. Please try again.');
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.search.value.trim();
    setSearchTerm(term);
  };

  const fetchRandomRecipe = () => {
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
          setSearchTerm('');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching random recipe:', err);
        setError('Failed to fetch a random recipe. Please try again.');
        setLoading(false);
      });
  };

  const handleCardClick = (meal) => {
    setSelectedRecipe(meal);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <form onSubmit={handleSearch} className="flex w-full max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search for a meal..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-red-500 transition-colors"
          >
            Search
          </button>
        </form>
        <button
          onClick={fetchRandomRecipe}
          className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-teal-500 transition-colors"
        >
          Random Recipe
        </button>
      </div>

      {loading && <div className="text-center text-lg text-text">Loading...</div>}
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}

      {!loading && !error && meals.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => handleCardClick(meal)}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-accent">{meal.strMeal}</h2>
                <p className="mt-2 text-text">{meal.strInstructions.substring(0, 80)}...</p>
                <button
                  onClick={() => {
                    if (isFavorite(meal.idMeal)) {
                      removeFavorite(meal.idMeal);
                    } else {
                      addFavorite(meal);
                    }
                  }}
                  className="mt-2 flex items-center gap-2 px-4 py-2 bg-accent text-white rounded hover:bg-opacity-80 transition-colors"
                >
                  <FiHeart color={isFavorite(meal.idMeal) ? 'red' : 'white'} size={20} />
                  <span>{isFavorite(meal.idMeal) ? 'Remove Favorite' : 'Add to Favorites'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && meals.length === 0 && searchTerm && (
        <div className="text-center text-text">No recipes found. Try another search!</div>
      )}

      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeModal} />}
    </div>
  );
}

export default Home;
