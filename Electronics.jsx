import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Smartphone', description: 'Latest model with high-resolution camera', price: 599.99, rating: 4.5 },
  { id: 2, name: 'Laptop', description: 'Powerful and lightweight for work and play', price: 999.99, rating: 4.8 },
  { id: 3, name: 'Wireless Earbuds', description: 'Crystal clear audio with long battery life', price: 129.99, rating: 4.3 },
  { id: 4, name: 'Smart Watch', description: 'Track your fitness and stay connected', price: 199.99, rating: 4.6 },
  { id: 5, name: 'Tablet', description: 'Perfect for entertainment and productivity', price: 349.99, rating: 4.7 },
  { id: 6, name: 'Bluetooth Speaker', description: 'Portable with rich, immersive sound', price: 79.99, rating: 4.2 },
  { id: 7, name: 'Gaming Console', description: 'Next-gen gaming experience', price: 499.99, rating: 4.9 },
  { id: 8, name: 'Digital Camera', description: 'Capture memories in stunning detail', price: 449.99, rating: 4.4 },
  { id: 9, name: 'Wireless Keyboard', description: 'Ergonomic design for comfortable typing', price: 89.99, rating: 4.1 },
  { id: 10, name: 'External SSD', description: 'Fast and portable storage solution', price: 159.99, rating: 4.5 },
  { id: 11, name: 'Noise-Canceling Headphones', description: 'Immersive audio experience', price: 299.99, rating: 4.7 },
  { id: 12, name: 'Smart Home Hub', description: 'Control your smart home devices', price: 129.99, rating: 4.3 },
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
          <button className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center text-sm">
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ElectronicsPage = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold py-4 text-center text-gray-800 bg-white shadow-md">Featured Electronics</h1>
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ElectronicsPage;