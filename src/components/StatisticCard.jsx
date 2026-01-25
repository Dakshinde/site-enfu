import React from 'react';

const StatisticCard = ({ title, value, description, color = 'blue', animationDelay = 0 }) => {
  const colorClasses = {
    blue: `border-l-4 border-vibrant-blue`,
    green: `border-l-4 border-bright-green`,
    navy: `border-l-4 border-dark-navy`
  };

  return (
    <div 
      className={`
        bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500
        transform hover:scale-105
        ${colorClasses[color]}
        animate-fade-in-up
      `}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <p className="text-sm font-medium uppercase mb-1 text-muted-foreground tracking-wider">
        {title}
      </p>
      <p className="text-4xl font-extrabold mb-4 text-dark-navy gradient-text">
        {value}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StatisticCard;