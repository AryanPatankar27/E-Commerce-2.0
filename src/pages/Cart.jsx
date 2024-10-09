import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQuantity } });
    } else {
      handleRemoveItem(productId);
    }
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (state.items.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              src={item.image || `/api/placeholder/100/100?text=${item.id}`}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="text-right text-xl font-bold">
          Total: ${calculateTotal().toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;