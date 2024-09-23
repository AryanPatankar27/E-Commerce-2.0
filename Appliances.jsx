import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Refrigerator', description: 'Energy-efficient with ample storage', price: 799.99, rating: 4.5 },
  { id: 2, name: 'Washing Machine', description: 'Multiple wash cycles for all fabrics', price: 549.99, rating: 4.3 },
  { id: 3, name: 'Microwave Oven', description: 'Quick and even heating', price: 129.99, rating: 4.2 },
  { id: 4, name: 'Dishwasher', description: 'Quiet operation with great cleaning power', price: 399.99, rating: 4.6 },
  { id: 5, name: 'Air Conditioner', description: 'Efficient cooling for any room size', price: 349.99, rating: 4.4 },
  { id: 6, name: 'Vacuum Cleaner', description: 'Powerful suction on all surfaces', price: 199.99, rating: 4.3 },
  { id: 7, name: 'Coffee Maker', description: 'Programmable brewing for perfect coffee', price: 79.99, rating: 4.5 },
  { id: 8, name: 'Toaster Oven', description: 'Versatile for baking, toasting, and reheating', price: 89.99, rating: 4.1 },
  { id: 9, name: 'Blender', description: 'Powerful motor for smooth blending', price: 69.99, rating: 4.2 },
  { id: 10, name: 'Electric Kettle', description: 'Fast boiling with auto shut-off', price: 39.99, rating: 4.0 },
  { id: 11, name: 'Food Processor', description: 'Multi-functional for all your prep needs', price: 149.99, rating: 4.4 },
  { id: 12, name: 'Standing Mixer', description: 'Durable build for all your baking projects', price: 249.99, rating: 4.7 },
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
          <button className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center text-sm">
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AppliancesPage = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold py-4 text-center text-gray-800 bg-white shadow-md">Home Appliances</h1>
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default AppliancesPage;