// components/Navbar.js


import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">ShopNow</Link>
      <div className="space-x-6">
         <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <Link to="/cart" className="hover:text-gray-300">Cart ({cartItems.length})</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
