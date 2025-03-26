import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background-image.jpg"; // Your food image
import logo from "../assets/logo.jpeg"; // Your JPEG logo

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundColor: "white", // explicitly white
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo in the top-left */}
      <img
        src={logo}
        alt="Fast Feast Recipes Logo"
        className="absolute top-4 left-4 w-20"
      />

      {/* Bold, centered app name */}
      <h1 className="relative text-black text-4xl font-bold">
        Fast Feast Recipes
      </h1>
    </div>
  );
};

export default SplashScreen;
