import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to ShopNow!</h1>
      <p className="text-lg mb-4">Find the best products at best prices. At your Budget!</p>
      <Link to="/products" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Browse Products
      </Link>
    </div>
  );
}

export default Home;
