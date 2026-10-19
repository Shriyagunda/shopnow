import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="text-lg font-semibold">🛒 MyStore</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
