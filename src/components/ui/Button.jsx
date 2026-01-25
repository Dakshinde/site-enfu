import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  onClick, 
  disabled, 
  loading,
  type = 'button'
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50';
  
  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-6 text-lg shadow-xl',
    sm: 'px-4 py-2 text-sm'
  };

  const variantClasses = {
    primary: `bg-vibrant-blue text-white hover:bg-vibrant-blue/90 focus:ring-vibrant-blue/50 shadow-vibrant-blue/25`,
    outline: `border-2 border-dark-navy text-dark-navy hover:bg-dark-navy hover:text-white focus:ring-dark-navy/50 shadow-dark-navy/10`,
    secondary: `bg-bright-green text-white hover:bg-bright-green/90 focus:ring-bright-green/50 shadow-bright-green/25`,
    ghost: `bg-transparent text-dark-navy hover:bg-dark-navy/10 focus:ring-dark-navy/50 shadow-none`
  };

  const disabledClasses = 'bg-gray-400 text-gray-600 cursor-not-allowed shadow-none';

  return (
    <button 
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${disabled || loading ? disabledClasses : variantClasses[variant]}
        ${className}
        transform hover:scale-105 active:scale-95
      `} 
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;