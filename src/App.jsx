import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Directly importing page components without lazy loading
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import SharedCartPage from './pages/SharedCartPage';
// import NotFoundPage from './pages/NotFoundPage'; // Uncomment this if you have a NotFoundPage

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="/shared-cart/:id" element={<SharedCartPage />} />
                {/* Uncomment below if you have a NotFoundPage */}
                {/* 
                <Route path="*" element={<NotFoundPage />} 
                /> 
                */}
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
