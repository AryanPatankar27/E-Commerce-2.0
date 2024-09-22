import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Order Confirmed!</h1>
      <p className="text-xl mb-4">Thank you for your purchase.</p>
      <p className="mb-8">We've sent a confirmation email with your order details.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
