// src/context/SharedCartContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedCartContext = createContext();

export const useSharedCart = () => {
  return useContext(SharedCartContext);
};

export const SharedCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item, addedBy) => {
    setCartItems((prevItems) => [...prevItems, { ...item, addedBy }]);
    // Example logic for totalAmount
    const price = 10; // Replace with actual item price
    setTotalAmount((prevTotal) => prevTotal + price);
  };

  const calculateDiscount = (purchasingPower) => {
    if (purchasingPower < 1000) return 0;
    if (purchasingPower < 5000) return 10; // 10% discount
    if (purchasingPower < 10000) return 20; // 20% discount
    return 30; // 30% discount for high purchasing power
  };

  return (
    <SharedCartContext.Provider value={{ cartItems, addToCart, totalAmount }}>
      {children}
    </SharedCartContext.Provider>
  );
};
