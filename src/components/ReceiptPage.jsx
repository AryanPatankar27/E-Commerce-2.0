import React from 'react';
import Card from "../components/ui/card";
import CardContent from "../components/ui/cardContent";
import CardHeader from "../components/ui/cardHeader";
import CardTitle from "../components/ui/cardTitle";

const ReceiptPage = () => {
  const receiptData = JSON.parse(localStorage.getItem('receiptData')) || {};

  return (
    <div className="container mx-auto p-4 bg-[#DCD0FF] min-h-screen">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Receipt</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Your Purchase:</h2>
          {receiptData.items && receiptData.items.map((item, index) => (
            <div key={index} className="mb-2">
              <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-4">
            <p><strong>Subtotal:</strong> ${receiptData.totalPrice?.toFixed(2)}</p>
            <p><strong>Discount Rate:</strong> {(receiptData.discountRate * 100).toFixed(0)}%</p>
            <p><strong>Discount Amount:</strong> ${receiptData.discountAmount?.toFixed(2)}</p>
            <p><strong>Final Price:</strong> ${receiptData.finalPrice?.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReceiptPage;