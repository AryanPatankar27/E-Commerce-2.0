import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from your backend API
    const fetchProducts = async () => {
      // Replace with your actual API endpoint
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Header */}
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
      <img src="" alt="Logo" className="w-10 h-10"/> 
        <h1 className="text-3xl font-bold text-blue-600">E MART</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Group Shopping
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
            Social Activity
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
          <button className="relative bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Rest of the component remains the same */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white rounded-lg shadow-lg mb-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-12">
              <h2 className="text-4xl font-bold mb-4">Welcome to E MART</h2>
              <p className="text-xl mb-6">Discover amazing products at unbeatable prices!</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/api/placeholder/800/600" alt="E MART Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <div className="min-h-screen bg-gray-100">
      {/* Featured Categories with links */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/electronics" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="font-semibold">Electronics</h3>
          </Link>
          <Link to="/clothing" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">👕</div>
            <h3 className="font-semibold">Clothing</h3>
          </Link>
          <Link to="/appliances" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">🏡</div>
            <h3 className="font-semibold">Home & Garden</h3>
          </Link>
          <Link to="/sports" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">⚽</div>
            <h3 className="font-semibold">Sports</h3>
          </Link>
        </div>
      </section>
    </div>


        {/* Product Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About E MART</h3>
              <p>Your one-stop shop for all your needs. Quality products, great prices, and excellent customer service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">Products</a></li>
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 E MART. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
