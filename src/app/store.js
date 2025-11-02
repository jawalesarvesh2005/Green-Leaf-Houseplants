// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

// 👇 Export it as default (this fixes your error)
export default store;
