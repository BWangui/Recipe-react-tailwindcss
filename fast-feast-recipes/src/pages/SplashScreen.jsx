import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Navigate to Landing Page
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="relative flex items-center justify-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/background image,jpg')" }} // Background Image
    >
      {/* Logo at the Top Left */}
      <img src={logo} alt="Fast Feast Logo" className="absolute top-4 left-4 w-24 animate-fadeIn" />

      {/* App Name with Move-in Effect */}
      <h1 className="text-white text-4xl font-bold animate-moveIn">Fast Feast Recipes</h1>
    </div>
  );
};

export default SplashScreen;
