# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://e-commerce-landing-page-nu.vercel.app/)

### Built with

-     Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React - JS library
- Next.js - React framework
- Tailwind CSS - For styles
- Redux - For state management
- React-Responsive - For handling responsive design
- React-Icons - For using icons in the project

### What I learned

I have used Redux in this challenge

```js
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
```

## Author

- Website - [Dev de Ferro](https://my-landing-page-weld.vercel.app/)
- Frontend Mentor - [@Rennan20](https://www.frontendmentor.io/profile/Rennan20)
