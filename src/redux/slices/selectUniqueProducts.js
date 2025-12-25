import { createSelector } from "@reduxjs/toolkit";

export const selectUniqueProducts = createSelector(
  (state) => state.cart.value,
  (productsInCart) => {
    const map = new Map();

    productsInCart.forEach((p) => {
      if (map.has(p.id)) {
        map.get(p.id).quantity += 1;
      } else {
        map.set(p.id, { product: p, quantity: 1 });
      }
    });
    console.log([...map.values()]);
    
    return [...map.values()];
  }
);