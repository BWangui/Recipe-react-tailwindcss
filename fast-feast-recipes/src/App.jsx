import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetails from "./pages/RecipeDetails";
import Testimonials from "./pages/Testimonials.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        {/* Show Navbar only after SplashScreen */}
        <Navbar />
        <h1 className="text-center text-2xl mt-6">Welcome to Fast Feast Recipes</h1>
      </div>
    </Router>
  );
};

export default App;
