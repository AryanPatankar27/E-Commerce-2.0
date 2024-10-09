import React from 'react';

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`pt-2 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
