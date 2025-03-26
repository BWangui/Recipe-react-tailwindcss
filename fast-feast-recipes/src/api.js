import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchCategoryRecipes = async (category) => {
  const response = await axios.get(`${API_URL}/filter.php?c=${category}`);
  return response.data.meals;
};

export const fetchRecipeDetails = async (id) => {
  const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return response.data.meals[0];
};
