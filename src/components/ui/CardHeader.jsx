import React from 'react';

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`border-b pb-2 text-xl font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default CardHeader;
