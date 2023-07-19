"use client";
import { createSlice } from "@reduxjs/toolkit";
import products from "../helpers/products";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const quantity = action.payload; // The quantity we want to add to the cart
      const existingItemIndex = state.findIndex(
        (item) => item.id === products[0].id
      ); // Assuming that products[0] is the product you are displaying details for.

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update the quantity
        state[existingItemIndex].quantity += quantity;
      } else {
        // If the item is not in the cart, add it to the state
        const newItem = {
          ...products[0], // Assuming products[0] is the product you are displaying details for.
          quantity: quantity,
        };
        state.push(newItem);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
