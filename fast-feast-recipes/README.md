# Fast Feast Recipes

Fast Feast Recipes is a responsive recipe finder web application built with React, Vite, and Tailwind CSS. The app integrates the [MealDB API](https://www.themealdb.com/api.php) to search for meals, fetch random recipes, and explore recipes by category. Clicking on a meal displays full details—including a numbered list of ingredients and step-by-step instructions—in a modal.

## Features

- **Search for Recipes:**  
  Find meals by entering a search term in the search bar. The search results include meal images, names, and a snippet of instructions.

- **Random Recipe:**  
  Get a randomly selected recipe with full details.

- **All Categories:**  
  Explore all meal categories. Clicking on a category fetches meals belonging to that category. Category cards feature a hover zoom effect for interactivity.

- **Recipe Modal:**  
  Clicking on any meal card opens a modal that displays the full recipe details. The modal shows:
  - A numbered (ordered) list of ingredients.
  - A numbered list of recipe steps (if available) or a complete instruction block.
  - The modal layout is consistent regardless of how the recipe is fetched.

- **Favorites:**  
  (If integrated) Easily add or remove recipes from your favorites.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Fast development build tool.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **MealDB API:** API used to fetch meal data.
- **React Icons:** For including scalable icons in the UI.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fast-feast-recipes.git
   cd fast-feast-recipes
