import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Dashboard() {
  const { cartItems } = useCart();
  const cartTotal = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const recentItems = cartItems.slice(-3).reverse();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium text-blue-600">Your account</p>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Shopping dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            A quick overview of your ShopNow shopping activity.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          Browse products
        </Link>
      </div>

      <section
        aria-label="Shopping summary"
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-600">Items in your cart</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {cartItems.length}
          </p>
          <Link
            to="/cart"
            className="mt-4 inline-block font-medium text-blue-600 hover:underline"
          >
            View cart
          </Link>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-600">Cart subtotal</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            ₹{cartTotal}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Based on the items currently in your cart.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Recently added
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              The latest products you added to your cart.
            </p>
          </div>
          {cartItems.length > 0 && (
            <Link
              to="/cart"
              className="shrink-0 font-medium text-blue-600 hover:underline"
            >
              View cart
            </Link>
          )}
        </div>

        {recentItems.length === 0 ? (
          <div className="rounded-md bg-gray-50 px-4 py-8 text-center">
            <p className="font-medium text-gray-800">
              Your cart is empty for now.
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Browse the store and add something you like.
            </p>
            <Link
              to="/products"
              className="mt-4 inline-block font-medium text-blue-600 hover:underline"
            >
              Explore products
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recentItems.map((item) => (
              <li
                key={item.cartItemId}
                className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded-md border border-gray-100 bg-white object-contain p-2"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    ₹{Number(item.price).toFixed(2)}
                  </p>
                </div>
                <Link
                  to={`/product/${item.id}`}
                  className="shrink-0 text-sm font-medium text-blue-600 hover:underline"
                >
                  View product
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-6 text-sm text-gray-500">
        Order history and account details will be available when those features
        are connected to the app.
      </p>
    </main>
  );
}

export default Dashboard;
