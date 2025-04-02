// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Comments from './pages/Comments'; // Ensure Comments.jsx exists in src/pages
import { FavoritesProvider } from './FavoritesContext';
import logo from './assets/logo.png';
import { FiMenu, FiX, FiHome, FiHeart } from 'react-icons/fi';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <nav className="bg-[#FFA726] shadow mb-8">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 mr-2" />
                <span className="text-2xl font-bold text-black">Fast Feast Recipes</span>
              </Link>
              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-6">
                <Link
                  to="/"
                  className="text-black text-xl font-semibold hover:text-gray-800 flex items-center gap-1"
                >
                  <FiHome size={20} /> <span>Home</span>
                </Link>
                <Link
                  to="/favorites"
                  className="text-black text-xl font-semibold hover:text-gray-800 flex items-center gap-1"
                >
                  <FiHeart size={20} /> <span>Favorites</span>
                </Link>
                <Link
                  to="/comments"
                  className="text-black text-xl font-semibold hover:text-gray-800 flex items-center gap-1"
                >
                  <span>Your Feedback</span>
                </Link>
              </div>
              {/* Mobile Navigation Toggle */}
              <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-black">
                  {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
              </div>
            </div>
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-[#FFA726] shadow">
                <div className="flex flex-col gap-3 px-4 py-3">
                  <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="text-black text-xl font-semibold hover:text-gray-800 flex items-center gap-1"
                  >
                    <FiHome size={20} /> <span>Home</span>
                  </Link>
                  <Link
                    to="/favorites"
                    onClick={toggleMobileMenu}
                    className="text-black text-xl font-semibold hover:text-gray-800 flex items-center gap-1"
                  >
                    <FiHeart size={20} /> <span>Favorites</span>
                  </Link>
                  <Link
                    to="/comments"
                    onClick={toggleMobileMenu}
                    className="text-black text-xl font-semibold hover:text-gray-800 flex items-center gap-1"
                  >
                    <span>Your Feedback</span>
                  </Link>
                </div>
              </div>
            )}
          </nav>
          {/* Main Content Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
