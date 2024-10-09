import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import CardContent from "../components/ui/cardContent";
import CardHeader from "../components/ui/cardHeader";
import CardTitle from "../components/ui/cardTitle";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const groupItems = JSON.parse(localStorage.getItem('groupItems')) || [];

  const handleCompleteCheckout = () => {
    // Here you would typically process the payment
    // For now, we'll just navigate to the receipt page
    navigate('/receipt');
  };

  return (
    <div className="container mx-auto p-4 bg-[#DCD0FF] min-h-screen">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Your Items:</h2>
          {groupItems.map((item, index) => (
            <div key={index} className="mb-2">
              <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-4">
            <strong>Total: ${groupItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
          </div>
          <Button onClick={handleCompleteCheckout} className="mt-4">
            Complete Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;