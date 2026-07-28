import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-gray-900">
          Tech<span className="text-blue-600">Stack</span> News
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
        >
          Home
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
