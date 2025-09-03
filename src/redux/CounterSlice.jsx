


import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : {}; 
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return {};
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      state[id] = (state[id] || 0) + 1;
      saveCartToLocalStorage(state);
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state[id] && state[id] > 0) {
        state[id] -= 1;
        if (state[id] === 0) delete state[id];
      }
      saveCartToLocalStorage(state);
    },
    reset: (state, action) => {
      const id = action.payload;
      delete state[id];
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      Object.keys(state).forEach((key) => delete state[key]);
      saveCartToLocalStorage(state);
    },
    setCounter: (state, action) => {
      const { id, value } = action.payload;
      state[id] = value;
    },
  },
});

export const { increment, decrement, reset, clearCart, setCounter } = counterSlice.actions;
export const selectCounter = (state, id) => state.counter[id] || 0;
export const selectTotalCount = (state) =>
  Object.values(state.counter).reduce((total, count) => total + count, 0);
export const selectCart = (state) => state.counter;

export default counterSlice.reducer;



