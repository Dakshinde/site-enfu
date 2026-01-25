import React from 'react';
import { ChevronRight } from 'lucide-react';
import Card from './ui/Card';

const ServiceCard = ({ title, description, features, icon, animationDelay = 0 }) => (
  <Card 
    hover={true}
    className="p-8 h-full flex flex-col animate-fade-in-up"
    style={{ animationDelay: `${animationDelay}ms` }}
  >
    <div className="mb-4 transform hover:scale-110 transition-transform duration-300 accent">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-default">
      {title}
    </h3>
    <p className="text-base text-muted mb-4 flex-grow leading-relaxed">
      {description}
    </p>
    
    <ul className="space-y-2 text-sm text-default/90">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center group">
          <ChevronRight className="w-4 h-4 mr-2 text-default/60 group-hover:text-accent transition-colors" />
          <span className="group-hover:text-accent transition-colors">{feature}</span>
        </li>
      ))}
    </ul>
  </Card>
);

export default ServiceCard;