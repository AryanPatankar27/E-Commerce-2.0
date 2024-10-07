// src/components/ui/Card.jsx
import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

export const CardFooter = ({ children }) => {
  return (
    <div className="flex justify-end mt-4">
      {children}
    </div>
  );
};

export const CardTitle = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-center">
      {children}
    </h2>
  );
};
export default Card;