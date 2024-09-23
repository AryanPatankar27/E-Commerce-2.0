import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Denim Jeans', description: 'Classic fit, comfortable denim', price: 49.99, rating: 4.5 },
  { id: 2, name: 'Cotton T-Shirt', description: 'Soft, breathable fabric for everyday wear', price: 19.99, rating: 4.3 },
  { id: 3, name: 'Leather Jacket', description: 'Stylish and durable outerwear', price: 199.99, rating: 4.7 },
  { id: 4, name: 'Summer Dress', description: 'Light and flowy for warm days', price: 59.99, rating: 4.4 },
  { id: 5, name: 'Formal Suit', description: 'Sharp look for business and events', price: 299.99, rating: 4.8 },
  { id: 6, name: 'Running Shoes', description: 'Comfortable with great support', price: 89.99, rating: 4.6 },
  { id: 7, name: 'Wool Sweater', description: 'Warm and cozy for cold weather', price: 79.99, rating: 4.2 },
  { id: 8, name: 'Silk Scarf', description: 'Elegant accessory for any outfit', price: 29.99, rating: 4.1 },
  { id: 9, name: 'Cargo Shorts', description: 'Practical and casual for summer', price: 39.99, rating: 4.0 },
  { id: 10, name: 'Pajama Set', description: 'Soft and comfortable for bedtime', price: 34.99, rating: 4.5 },
  { id: 11, name: 'Rain Coat', description: 'Waterproof protection from the elements', price: 69.99, rating: 4.3 },
  { id: 12, name: 'Fedora Hat', description: 'Classic style for a sophisticated look', price: 45.99, rating: 4.2 },
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
          <button className="bg-indigo-600 text-white px-3 py-1 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center text-sm">
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ClothingPage = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold py-4 text-center text-gray-800 bg-white shadow-md">Fashion Clothing</h1>
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ClothingPage;