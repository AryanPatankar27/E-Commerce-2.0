// This is a mock API service. In a real application, you would replace these
// with actual API calls to your backend.

export const getProducts = async () => {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Product 1', price: 19.99, description: 'This is product 1' },
          { id: 2, name: 'Product 2', price: 29.99, description: 'This is product 2' },
          { id: 3, name: 'Product 3', price: 39.99, description: 'This is product 3' },
        ]);
      }, 500);
    });
};
  
export const getSharedCart = async (id) => {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          items: [
            { id: 1, name: 'Shared Product 1', price: 19.99, quantity: 2 },
            { id: 2, name: 'Shared Product 2', price: 29.99, quantity: 1 },
          ],
        });
      }, 500);
    });
};
  
export const createOrder = async (orderData) => {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          orderId: 'ORD-' + Math.random().toString(36).substr(2, 9),
          ...orderData,
        });
      }, 500);
    });
};
