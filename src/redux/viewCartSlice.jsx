import { createSlice } from "@reduxjs/toolkit";

const viewCartSlice = createSlice({
  name: "viewCart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = viewCartSlice.actions;

export const selectCart = (state) => state.viewCart;

export default viewCartSlice.reducer;
