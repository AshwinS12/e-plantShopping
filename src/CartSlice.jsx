import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const newItem = action.payload;
      const existingItem = state.items.find((item) => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is new, add it to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
         const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },
   
    updateQuantity: (state, action) => {
 const { name, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
