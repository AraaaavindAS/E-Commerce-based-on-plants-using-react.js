import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap the app and provide cart functionality
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a plant to the cart
  const addToCart = (plant) => {
    setCart((prevCart) => {
      // Check if the plant is already in the cart
      const existingPlant = prevCart.find(item => item.id === plant.id);
      if (existingPlant) {
        // If it is, increase the quantity
        return prevCart.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If not, add the new plant with quantity 1
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  // Function to update the quantity of a plant in the cart
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      ).filter(item => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Function to remove a plant entirely from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate the total cost of items in the cart
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Provide cart state and actions to children components
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      totalCost
    }}>
      {children}
    </CartContext.Provider>
  );
};
