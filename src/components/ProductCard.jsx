import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-48 text-center bg-white">
      <h2 className="text-sm font-semibold mt-2 text-gray-800">{product.name}</h2>
      <p className="text-gray-600 text-xs">${product.price}</p>
    </div>
  );
}

export default ProductCard;
