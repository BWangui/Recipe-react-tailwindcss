
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-800 font-bold">
        Recipe Finder
      </h1>
    </div>
  );
};

export default SplashScreen;
