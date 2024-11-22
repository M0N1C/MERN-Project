import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-900">Free Tours</h1>
        <div className="flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/tours" className="hover:text-black">
            Tours
          </Link>
          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>
          <Link to="/login" className="hover:text-black">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
