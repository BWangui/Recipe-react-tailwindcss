
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };
  const mostSearchedRecipes = [
    { id: 1, name: "Chicken Curry", image: "https://source.unsplash.com/featured/?chicken-curry" },
    { id: 2, name: "Beef Pilau", image: "https://source.unsplash.com/featured/?beef-pilau" },
    { id: 3, name: "Butternut Chapati", image: "https://source.unsplash.com/featured/?chapati" },
    { id: 4, name: "Hotdog", image: "https://source.unsplash.com/featured/?hotdog" },
    { id: 5, name: "Peanut Banana Smoothie", image: "https://source.unsplash.com/featured/?peanut-banana-smoothie" },
    { id: 6, name: "Frenchfries", image: "https://source.unsplash.com/featured/?french-fries" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">

      <div className="flex justify-between items-center p-4 bg-white shadow">
        <h2 className="text-2xl font-bold text-gray-800">Home</h2>
        <button
          onClick={() => navigate('/favorites')}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Favorites
        </button>
      </div>


      <form onSubmit={handleSearchSubmit} className="flex justify-center my-6 px-4">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="p-2 bg-gray-300 text-gray-800 rounded-r hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Search
        </button>
      </form>

      {/* Most Searched Recipes */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Most Searched Recipes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mostSearchedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
              onClick={() => console.log(`Clicked ${recipe.name}`)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="mt-2 text-lg font-bold text-gray-700 text-center">
                {recipe.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="absolute bottom-4 left-4 p-3 bg-white rounded-full shadow hover:bg-gray-200 focus:outline-none"
      >
        &larr;
      </button>
    </div>
  );
};

export default HomeScreen;
