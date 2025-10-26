import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const getCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const getTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setItemCount(getCount);
    setTotalPrice(getTotal);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== id)
    );
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const toggleWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find((wItem) => wItem.id === item.id);
      if (existingItem) {
        return prevItems.filter((wItem) => wItem.id !== item.id);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const contextValue = {
    cartItems,
    itemCount,
    totalPrice,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    wishlistItems,
    toggleWishlist,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};