import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSharedCart } from '../services/api'; // Ensure this is correctly imported
import useCart from '../hooks/useCart';

const SharedCartPage = () => {
  const { id } = useParams();
  const [sharedCart, setSharedCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchSharedCart = async () => {
      try {
        const cart = await getSharedCart(id);
        setSharedCart(cart);
      } catch (err) {
        setError('Failed to load shared cart');
      } finally {
        setLoading(false);
      }
    };

    fetchSharedCart();
  }, [id]);

  const handleAddToCart = () => {
    if (sharedCart) {
      sharedCart.items.forEach(item => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      });
    }
  };

  if (loading) return <div>Loading shared cart...</div>;
  if (error) return <div>{error}</div>;
  if (!sharedCart) return <div>No shared cart found</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Shared Cart</h1>
      <div className="mb-8">
        {sharedCart.items.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add All Items to My Cart
      </button>
    </div>
  );
};

export default SharedCartPage;
