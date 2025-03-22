# Recipe Finder

Recipe Finder is a production-ready React application that allows users to discover recipes based on categories. The app utilizes [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data and presents it in a modern, responsive UI built with Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Splash Screen:** A visually appealing splash screen that displays the app logo and automatically navigates to the home screen after a short delay.
- **Category Based Navigation:** Home screen displays four categories (Breakfast, Main Dishes, Snacks, and Smoothies). Clicking a category navigates to a detailed view showing recipes for that category.
- **Responsive Design:** Fully responsive layout using Tailwind CSS, ensuring a smooth user experience on mobile, tablet, and desktop devices.
- **TheMealDB API Integration:** Uses the TheMealDB API to fetch recipes based on selected categories.
- **Error Handling:** Graceful error handling for API calls, with loading states and error messages.

## Technologies Used

- **React:** For building the user interface.
- **React Router:** For client-side routing.
- **Tailwind CSS:** For styling and responsive design.
- **TheMealDB API:** As the external data source for recipe information.
- **Vite:** For project setup and fast development.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/recipe-finder.git
   cd recipe-finder
