// src/components/ui/Input.jsx
import React from 'react';

export const Input = ({ id, type, placeholder, value, onChange, required }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};
export default Input;