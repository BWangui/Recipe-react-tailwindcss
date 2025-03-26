import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetails from "./pages/RecipeDetails";
import Testimonials from "./pages/Testimonials.jsx";
import NotFound from "./pages/NotFound";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  </Router>
);

export default AppRouter;
