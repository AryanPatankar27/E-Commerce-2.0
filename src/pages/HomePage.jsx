import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  
  const carouselItems = [
    {
      image: "src/assets/Images/Cimg/WhatsApp Image 2024-10-09 at 00.15.09_6aa2702e.jpg",
      title: "Summer Sale",
      description: "Up to 50% off on selected items!"
    },
    {
      image: "src/assets/Images/Cimg/WhatsApp Image 2024-10-09 at 00.02.12_744202f8.jpg",
      title: "New Arrivals",
      description: "Check out our latest collection!"
    },
    {
      image: "src/assets/Images/Cimg/WhatsApp Image 2024-10-09 at 00.04.54_7733b4e7.jpg",
      title: "Free Shipping",
      description: "On orders over $50"
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSocialActivityClick = () => {
    navigate('/social-activity');
  };

  const itemCount = cart.length; // itemCount for the cart

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white w-full">
      {/* Custom Header */}
      <header className="bg-white text-gray-800 rounded-lg shadow-md mb-8 p-6 w-full">
        <div className="flex items-center justify-between w-full">
          <img src="src/assets/Images/professional logo for EMart ecommerce website.png" alt="Logo" className="w-10 h-10"/> 
          <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Times New Roman' }}>E MART</h1>
          
          <div className="flex items-center space-x-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => navigate('/group-shopping')} >
              Group Shopping
            </button>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              onClick={handleSocialActivityClick}
            >
              Social Activity
            </button>

            {/* Navigation Links */}
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blue-200">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-blue-200 relative">
                  Checkout
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>

            <button className="relative bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white text-gray-800 rounded-lg shadow-lg mb-12 p-8 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Welcome to E MART</h2>
            <p className="text-xl mb-6">Discover amazing products at unbeatable prices!</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="src/assets/Images/image.png" alt="E MART Hero" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white text-gray-800 rounded-lg shadow-lg mb-12 p-6 w-full max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Promotions</h2>
        <Carousel items={carouselItems} />
      </section>

      {/* Featured Categories */}
      <section className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/electronics" className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-gray-200 transition-colors">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="font-semibold">Electronics</h3>
          </Link>
          <Link to="/clothing" className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-gray-200 transition-colors">
            <div className="text-4xl mb-2">👕</div>
            <h3 className="font-semibold">Clothing</h3>
          </Link>
          <Link to="/appliances" className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-gray-200 transition-colors">
            <div className="text-4xl mb-2">🏡</div>
            <h3 className="font-semibold">Home & Garden</h3>
          </Link>
          <Link to="/sports" className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-gray-200 transition-colors">
            <div className="text-4xl mb-2">⚽</div>
            <h3 className="font-semibold">Sports</h3>
          </Link>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-gray-800 text-white mt-12 w-full">
        <div className="container mx-auto px-4 py-12 w-full max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center md:justify-center text-center md:space-x-8">
            {/* About Section */}
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">About E MART</h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                Your one-stop shop for all your needs. Quality products, great prices, and excellent customer service.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 max-w-xs mx-auto">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">Products</a></li>
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex justify-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            © 2024 E MART. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
