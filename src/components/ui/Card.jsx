import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      card-bg text-default p-6 rounded-2xl shadow-xl border 
      border-white/10
      transition-all duration-300
      ${hover ? 'hover:shadow-2xl hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;