// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './FavoritesContext';
import logo from './assets/logo.png'; // Your logo image
import { FiMenu, FiX, FiHome, FiHeart } from 'react-icons/fi';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <nav className="bg-white shadow mb-8">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img src={logo} alt="Logo" className="h-10 mr-2" />
                <span className="text-2xl font-bold text-accent">Fast Feast Recipes</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-4">
                <Link to="/" className="text-text hover:text-accent flex items-center gap-1">
                  <FiHome /> <span>Home</span>
                </Link>
                <Link to="/favorites" className="text-text hover:text-accent flex items-center gap-1">
                  <FiHeart /> <span>Favorites</span>
                </Link>
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-text">
                  {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white shadow">
                <div className="flex flex-col gap-2 px-4 py-2">
                  <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="text-text hover:text-accent flex items-center gap-1"
                  >
                    <FiHome /> <span>Home</span>
                  </Link>
                  <Link
                    to="/favorites"
                    onClick={toggleMobileMenu}
                    className="text-text hover:text-accent flex items-center gap-1"
                  >
                    <FiHeart /> <span>Favorites</span>
                  </Link>
                </div>
              </div>
            )}
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
