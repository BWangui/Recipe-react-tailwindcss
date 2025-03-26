import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeDetails(id).then(setRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-lg w-full" />
      <p className="text-lg font-semibold mt-4">Instructions:</p>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
