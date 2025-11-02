import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, removeItem, clearCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = Object.values(items);

  if (cartItems.length === 0) return <p className="p-6 text-center text-gray-500">Your cart is empty.</p>;

  return (
    <div className="p-6">
      {cartItems.map(({ product, quantity }) => (
        <div key={product.id} className="flex justify-between items-center mb-4 border-b pb-2">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded-md" />
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-500">₹{product.price} × {quantity}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => dispatch(decrease(product.id))} className="bg-gray-300 px-2 rounded">-</button>
            <span>{quantity}</span>
            <button onClick={() => dispatch(increase(product.id))} className="bg-gray-300 px-2 rounded">+</button>
            <button onClick={() => dispatch(removeItem(product.id))} className="text-red-500 ml-3">Remove</button>
          </div>
        </div>
      ))}
      <div className="text-right mt-6">
        <h2 className="text-xl font-semibold">Total: ₹{totalPrice}</h2>
        <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white mt-3 px-4 py-2 rounded">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
