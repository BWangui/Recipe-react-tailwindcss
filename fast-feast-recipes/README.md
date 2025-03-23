# Fast Feast Recipes

Fast Feast Recipes is a React-based recipe finder app that allows users to explore various recipes by categories, search for meals, and view detailed ingredients and cooking instructions. The app utilizes the MealDB API to fetch and display real-time recipe data.

## Features

- **Splash Screen**: Displays the app logo and transitions to the landing page after 5 seconds.
- **Landing Page**: Provides navigation to Home, Favorites, and Explore.
- **Category Browsing**: Users can select from categories (Breakfast, Main Dish, Snacks, Smoothies) to view related recipes.
- **Recipe Detail Page**: Displays detailed information, including the name, image, ingredients, and cooking instructions.
- **Search Functionality**: Users can search for recipes using keywords.
- **Navigation Arrows**:
  - "Back" and "Next" buttons for easy navigation between screens.
  - Recipe detail pages allow navigation between different meals.
- **Testimonials Page**: Displays user feedback about the app.
- **Fully Responsive Design**: Works on both mobile and desktop devices.

## Tech Stack

- **Frontend**: React.js, TailwindCSS
- **State Management**: useState, useEffect (React Hooks)
- **API Calls**: Axios
- **Routing**: React Router
- **API**: [MealDB API](https://www.themealdb.com/api.php)

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

## API Usage

The app fetches data from the MealDB API:

- **Fetch Recipes by Category**
  ```js
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  ```
- **Fetch Recipe Details by ID**
  ```js
  axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  ```

## Project Structure

```
recipe-finder-app/
├── src/
│   ├── components/
│   │   ├── NavigationArrows.jsx
│   │   ├── SearchBar.jsx
│   │   ├── RecipeCard.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── Breakfast.jsx
│   │   ├── MainDish.jsx
│   │   ├── Snacks.jsx
│   │   ├── Smoothies.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── Testimonials.jsx
│   ├── App.js
│   ├── index.js
├── public/
│   ├── images/
├── package.json
├── README.md
```

## Deployment

To deploy the app using **Vercel**:

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```
2. Deploy the app
   ```bash
   vercel
   ```

## Color Palette
- **Primary**: `#FF6347` (Tomato Red)
- **Secondary**: `#4CAF50` (Green)
- **Background**: `#F8F9FA` (Light Gray)
- **Text**: `#333333` (Dark Gray)

## License
This project is licensed under the MIT License.

---

**Enjoy Fast Feast Recipes! 🍽️**

