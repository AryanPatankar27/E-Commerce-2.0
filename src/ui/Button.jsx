// src/components/ui/Button.jsx
import React from 'react';

export const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;