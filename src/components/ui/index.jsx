import React from 'react';

export const Button = ({ children, className = "", ...props }) => (
  <button 
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`} 
    {...props}
  >
    {children}
  </button>
);

export const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white shadow rounded-lg ${className}`} {...props}>{children}</div>
);

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`px-4 py-5 border-b border-gray-200 ${className}`} {...props}>{children}</div>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);