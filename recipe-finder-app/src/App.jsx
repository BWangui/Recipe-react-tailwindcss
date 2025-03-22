// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';


function App() {
  return (
    <Router>
      <Routes>
        {/* Splash Screen route */}
        <Route path="/" element={<SplashScreen />} />
        {/* Home Screen route */}
        <Route path="/home" element={<HomeScreen />} />
        {/* Category Screen route; the ":name" parameter holds the category name */}
        <Route path="/category/:name" element={<CategoryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
