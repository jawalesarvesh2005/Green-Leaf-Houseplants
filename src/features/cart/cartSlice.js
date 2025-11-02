import { createSlice } from '@reduxjs/toolkit';

// 🛍️ Initial state of the cart
const initialState = {
  items: {}, // each item will be stored as { productId: { product, quantity } }
  totalQuantity: 0, // total items in the cart
  totalPrice: 0, // total cost of all items
};

// ♻️ Function to recalculate total quantity and price after each update
const recalcTotals = (state) => {
  let totalQty = 0;
  let totalCost = 0;

  // Loop through all cart items to calculate totals
  Object.values(state.items).forEach(({ product, quantity }) => {
    totalQty += quantity;
    totalCost += product.price * quantity;
  });

  state.totalQuantity = totalQty;
  state.totalPrice = Number(totalCost.toFixed(2)); // rounded to 2 decimals
};

// 🧠 Slice defines reducers (actions that modify cart state)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ➕ Add a product to the cart
    addToCart: (state, action) => {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { product, quantity: 1 };
      }
      recalcTotals(state);
    },

    // ⬆️ Increase item quantity
    increase: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
      recalcTotals(state);
    },

    // ⬇️ Decrease item quantity (remove if quantity = 0)
    decrease: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;

      state.items[id].quantity -= 1;
      if (state.items[id].quantity <= 0) {
        delete state.items[id];
      }
      recalcTotals(state);
    },

    // ❌ Remove an item completely
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      recalcTotals(state);
    },

    // 🧹 Clear entire cart
    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions and reducer
export const { addToCart, increase, decrease, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
