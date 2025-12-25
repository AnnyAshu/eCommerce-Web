import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromStorage, saveCartToStorage } from "./cartStorage";

const initialState = {
  value: loadCartFromStorage(), // ⬅️ hydrate on app load
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProdInCart: (state, action) => {
      state.value.push(action.payload);
      saveCartToStorage(state.value); // ⬅️ persist
    },
    removeOneProdFromCart: (state, action) => {
      const index = state.value.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.value.splice(index, 1);
        saveCartToStorage(state.value); // ⬅️ persist
      }
    },
    removeProdFromCart: (state, action) => {
      state.value = state.value.filter((p) => p.id !== action.payload.id);
      saveCartToStorage(state.value); // ⬅️ persist
    },
    clearCart: (state) => {
      state.value = [];
      saveCartToStorage([]);
    },
  },
});

export const { addProdInCart, removeProdFromCart,removeOneProdFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
