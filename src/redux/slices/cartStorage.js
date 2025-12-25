const CART_KEY = "cart_items";

export const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return [];
  }
};

export const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
};
