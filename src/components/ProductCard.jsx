// src/components/ProductCard.jsx
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Use Cart Context

const ProductCard = ({ product }) => {
  const { dispatch } = useCart(); // Get dispatch from context

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { id: product.id, name: product.name, price: product.price } });
    alert('Product added to cart successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <img src={`/api/placeholder/300/200?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">{product.name}</h2>
        <p className="text-gray-600 mb-2 text-sm flex-grow">{product.description}</p>
        <div className="mt-auto">
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center text-sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} className="mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
