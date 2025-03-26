import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background-image.jpg"; // Your food image
import logo from "../assets/logo.jpeg"; // Your JPEG logo

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="bg-maroonBrown min-h-screen flex justify-center items-center"
      style={{
        backgroundColor: "#964B00 ", // explicitly white
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
      <h1 className=" <h1 className="text-white text-3xl font-bold>
        Fast Feast Recipes
      </h1>
    </div>
  );
};

export default SplashScreen;
