// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeModal from '../RecipeModal';
import { useFavorites } from '../FavoritesContext';
import { FiHeart } from 'react-icons/fi';

function Home() {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Fetch recipes based on search term (full details)
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

  // Fetch all categories on component mount
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories || []);
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.search.value.trim();
    setSearchTerm(term);
  };

  // Fetch a random recipe (full details)
  const fetchRandomRecipe = () => {
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          // Use lookup endpoint to ensure full details
          fetchRecipeById(data.meals[0].idMeal);
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

  // Fetch full recipe details using the lookup endpoint
  const fetchRecipeById = (id) => {
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          setSelectedRecipe(data.meals[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching recipe details:', err);
        setError('Failed to fetch recipe details. Please try again.');
        setLoading(false);
      });
  };

  // Open modal with full recipe details
  const handleCardClick = (meal) => {
    fetchRecipeById(meal.idMeal);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  // Fetch meals for a clicked category (limited details)
  const handleCategoryClick = (categoryName) => {
    setLoading(true);
    setError(null);
    setSelectedCategory(categoryName);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then(response => response.json())
      .then(data => {
        setCategoryMeals(data.meals || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching category meals:', err);
        setError(`Failed to fetch meals for category: ${categoryName}`);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white min-h-screen text-black p-6">
      {/* Search & Random Recipe Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <form onSubmit={handleSearch} className="flex w-full max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search for a meal..."
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-l-md focus:bg-white focus:text-black focus:outline-none"
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
          className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-highlight transition-colors"
        >
          Random Recipe
        </button>
      </div>

      {/* Display Search Results */}
      {loading && <div className="text-center text-lg">Loading...</div>}
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      {!loading && !error && meals.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div 
              key={meal.idMeal} 
              className="bg-gray-100 rounded shadow overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => handleCardClick(meal)}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-accent">{meal.strMeal}</h2>
                <p className="mt-2 text-gray-700">
                  {meal.strInstructions.substring(0, 80)}...
                </p>
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

      {/* All Categories Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">All Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.idCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
              className="bg-[#F96D00] text-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{category.strCategory}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Meals Section */}
      {categoryMeals.length > 0 && !loading && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            Meals in {selectedCategory} Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryMeals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-gray-100 rounded shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => handleCardClick(meal)}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-accent">{meal.strMeal}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation to Feedback (Comments) Page */}
      <div className="mt-12 text-center">
        <Link
          to="/comments"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
        >
          View & Leave Your Feedback
        </Link>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeModal} />}
    </div>
  );
}

export default Home;
