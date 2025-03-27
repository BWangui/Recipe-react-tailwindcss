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

  // Fetch recipes based on search term
  useEffect(() => {
    if (!searchTerm) {
      setMeals([]);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch recipes. Please try again.');
        setLoading(false);
      });
  }, [searchTerm]);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.search.value.trim();
    setSearchTerm(term);
  };

  // Fetch a random recipe
  const fetchRandomRecipe = () => {
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          setMeals(data.meals);
          setSearchTerm('');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching random recipe:', err);
        setError('Failed to fetch a random recipe. Please try again.');
        setLoading(false);
      });
  };

  // Open the modal for detailed view
  const handleCardClick = (meal) => {
    setSelectedRecipe(meal);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {/* Section One: Welcome & Search */}
      <section className="py-8 bg-sectionOne text-textLight">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Fast Feast Recipes</h1>
          <p className="text-lg mb-6">
            Discover vibrant, delicious recipes to spice up your kitchen!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <form onSubmit={handleSearch} className="flex w-full max-w-md">
              <input
                type="text"
                name="search"
                placeholder="Search for a meal..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-secondary transition-colors"
              >
                Search
              </button>
            </form>
            <button
              onClick={fetchRandomRecipe}
              className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-accent transition-colors"
            >
              Random Recipe
            </button>
          </div>
          {loading && <div className="mt-4 text-lg">Loading...</div>}
          {error && <div className="mt-4 text-red-200">{error}</div>}
        </div>
      </section>

      {/* Section Two: Recipe Listings */}
      <section className="py-8 bg-sectionTwo text-textLight">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Recipes</h2>
          {loading && <div className="text-center text-lg">Loading...</div>}
          {error && <div className="text-center text-red-200 mb-4">{error}</div>}
          {!loading && !error && meals.length > 0 ? (
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
          ) : (
            !loading &&
            !error &&
            searchTerm && (
              <div className="text-center">No recipes found. Try another search!</div>
            )
          )}
        </div>
      </section>

      {/* Section Three: Call-to-Action */}
      <section className="py-8 bg-sectionThree text-textDark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Culinary Community</h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter and never miss out on new, exciting recipes!
          </p>
          <button className="px-6 py-3 bg-primary text-white rounded hover:bg-secondary transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeModal} />}
    </div>
  );
}

export default Home;
