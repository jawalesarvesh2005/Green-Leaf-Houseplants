import React from 'react';
import ProductList from './ProductList';

const Landing = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-green-700">Welcome to Green Leaf Houseplants 🌿</h2>
        <p className="text-gray-600 mt-2">Bring nature into your home with our beautiful indoor plants.</p>
      </div>
      <ProductList />
    </div>
  );
};

export default Landing;
