



import { createSlice, createSelector } from '@reduxjs/toolkit';


const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return {};
  }
};

// Save cart to localStorage
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
      const item = action.payload; 
      if (state[item.id]) {
        state[item.id].quantity += 1;
      } else {
        state[item.id] = { ...item, quantity: 1 };
      }
      saveCartToLocalStorage(state);
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id].quantity -= 1;
        if (state[id].quantity <= 0) delete state[id];
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
      if (state[id]) {
        state[id].quantity = value;
      }
      saveCartToLocalStorage(state);
    },
  },
});

// Actions
export const { increment, decrement, reset, clearCart, setCounter } = counterSlice.actions;

// Basic selector
export const selectCounter = (state) => state.counter;

// Memoized selectors
export const selectCartItems = createSelector(
  [selectCounter],
  (counter) => Object.values(counter).filter((item) => item.quantity > 0)
);

export const selectTotalCount = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const selectItem = (state, id) => state.counter[id] || null;

// Export reducer
export default counterSlice.reducer;
