// src/services/cartService.js

export const getCart = async (userId) => {
    try {
      const response = await fetch(`/cart/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw error;
    }
  };
  
  export const addToCart = async (productId, quantity, price) => {
    try {
      const response = await fetch('/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity, price }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error;
    }
  };
  
  export const removeCartItem = async (productId) => {
    try {
      const response = await fetch('/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw error;
    }
  };
  
  export const fetchProducts = async () => {
    try {
      const response = await fetch('/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  
  export const fetchProductsByCategory = async (category) => {
    try {
      const response = await fetch(`/products/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products by category');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  };