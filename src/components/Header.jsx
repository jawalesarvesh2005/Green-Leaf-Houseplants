import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <header className="bg-green-700 text-white flex justify-between px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold">🌿 Green Leaf Houseplants</h1>
      <div className="flex items-center gap-4">
        <p className="text-sm">Items: {totalQuantity}</p>
        <p className="text-sm">Total: ₹{totalPrice}</p>
      </div>
    </header>
  );
};

export default Header;
