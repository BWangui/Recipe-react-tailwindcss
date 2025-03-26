import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import RecipePage from "./pages/RecipePage";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        {/* Show Navbar only after SplashScreen */}
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
