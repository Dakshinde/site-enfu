import React from 'react';

const ProcessStep = ({ number, title, description, animationDelay = 0 }) => (
  <div 
    className="flex flex-col items-center text-center animate-fade-in-up"
    style={{ animationDelay: `${animationDelay}ms` }}
  >
    <div className="w-16 h-16 bg-vibrant-blue rounded-full text-white font-bold flex items-center justify-center text-xl mb-4 shadow-xl transform hover:scale-110 transition-transform duration-300 animate-float">
      {number}
    </div>
    <h4 className="text-xl font-semibold mb-2 text-dark-navy group-hover:text-vibrant-blue transition-colors">
      {title}
    </h4>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

export default ProcessStep;