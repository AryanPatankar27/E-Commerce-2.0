import React from 'react';

const TextField = ({ label, value, onChange, className = '' }) => {
  return (
    <div className={`text-field ${className}`}>
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default TextField;
