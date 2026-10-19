import React, { createContext, useContext, useRef, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const nextCartItemId = useRef(0);

  const addToCart = (product) => {
    const cartItem = { ...product, cartItemId: nextCartItemId.current++ };
    setCartItems((items) => [...items, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((items) =>
      items.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
