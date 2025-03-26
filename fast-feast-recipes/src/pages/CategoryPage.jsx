import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCategoryRecipes } from "../api";

const CategoryPage = () => {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchCategoryRecipes(name).then(setRecipes);
  }, [name]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{name} Recipes</h1>
      <div className="grid grid-cols-2 gap-4">
        {recipes.map((meal) => (
          <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg w-full" />
            <p>{meal.strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
