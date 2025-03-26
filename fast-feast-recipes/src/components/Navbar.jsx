import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Fast Feast Recipes</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:text-yellow-400">
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/explore" className="hover:text-yellow-400">
              Explore
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation (Icons) */}
        <div className="md:hidden flex space-x-4">
          <Link to="/" className="hover:text-yellow-400">🏠</Link>
          <Link to="/favorites" className="hover:text-yellow-400">❤️</Link>
          <Link to="/explore" className="hover:text-yellow-400">🔍</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
