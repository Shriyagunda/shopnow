import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="h-24 w-24 object-contain" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-blue-600 font-bold">₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right text-xl font-bold">
            Total: ₹{totalPrice}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
