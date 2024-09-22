import React from 'react';
import ProductList from '../components/ProductList';
import WhatsAppInvite from '../components/WhatsAppInvite';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
      <ProductList />
      <div className="mt-12">
        <WhatsAppInvite />
      </div>
    </div>
  );
};

export default HomePage;
