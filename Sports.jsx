import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Basketball', description: 'Official size and weight for pro play', price: 29.99, rating: 4.5 },
  { id: 2, name: 'Tennis Racket', description: 'Balanced for power and control', price: 89.99, rating: 4.3 },
  { id: 3, name: 'Soccer Cleats', description: 'Excellent traction on all fields', price: 79.99, rating: 4.7 },
  { id: 4, name: 'Yoga Mat', description: 'Non-slip surface for stability', price: 24.99, rating: 4.4 },
  { id: 5, name: 'Dumbbells Set', description: 'Adjustable weights for home gym', price: 149.99, rating: 4.8 },
  { id: 6, name: 'Golf Club Set', description: 'Complete set for beginners', price: 299.99, rating: 4.6 },
  { id: 7, name: 'Swimming Goggles', description: 'Anti-fog lenses for clear vision', price: 19.99, rating: 4.2 },
  { id: 8, name: 'Cycling Helmet', description: 'Lightweight and well-ventilated', price: 59.99, rating: 4.5 },
  { id: 9, name: 'Boxing Gloves', description: 'Padded protection for training', price: 49.99, rating: 4.3 },
  { id: 10, name: 'Fishing Rod', description: 'Telescopic design for easy transport', price: 69.99, rating: 4.1 },
  { id: 11, name: 'Snowboard', description: 'All-mountain freestyle board', price: 249.99, rating: 4.6 },
  { id: 12, name: 'Table Tennis Set', description: 'Includes net, paddles, and balls', price: 39.99, rating: 4.4 },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
      />
    ))}
    <span className="ml-1 text-xs text-gray-600">{rating.toFixed(1)}</span>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
    <img src={`/api/placeholder/300/200?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">{product.name}</h2>
      <p className="text-gray-600 mb-2 text-sm flex-grow">{product.description}</p>
      <div className="mt-auto">
        <StarRating rating={product.rating} />
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center text-sm">
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SportsPage = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold py-4 text-center text-gray-800 bg-white shadow-md">Sports Equipment</h1>
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default SportsPage;