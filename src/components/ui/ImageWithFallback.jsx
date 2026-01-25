import React, { useState } from 'react';

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4K';

const ImageWithFallback = ({ src, alt, className = '', style = {} }) => {
  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setDidError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const fallbackUrl = `https://placehold.co/600x400/1a1a2e/ffffff?text=Image+Loading+Error`;
  const imageSrc = didError ? fallbackUrl : src;

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-vibrant-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {didError ? (
        <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-2xl">
          <img src={ERROR_IMG_SRC} alt="Error loading image" className="w-16 h-16 opacity-50" />
        </div>
      ) : (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={`
            w-full h-full object-cover rounded-2xl transition-opacity duration-300
            ${isLoading ? 'opacity-0' : 'opacity-100'}
          `} 
          onError={handleError}
          onLoad={handleLoad}
          loading="lazy"
        />
      )}
      
      <div className="absolute inset-0 bg-black opacity-10 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default ImageWithFallback;