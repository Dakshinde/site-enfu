import React from 'react';
import { Zap, Shield, Clock, Headphones, TrendingUp, Award } from 'lucide-react';

export const WhyUsSection = () => {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast Deployment",
            description: "Get your AI solutions up and running in days, not months."
        },
        {
            icon: Shield,
            title: "Enterprise-Grade Security",
            description: "Bank-level encryption and compliance with industry standards."
        },
        {
            icon: Clock,
            title: "24/7 Dedicated Support",
            description: "Round-the-clock technical support from our expert team."
        },
        {
            icon: Headphones,
            title: "Tailored to Your DNA",
            description: "Bespoke AI architecture designed specifically for your business operations."
        },
        {
            icon: TrendingUp,
            title: "Engineered by Veterans",
            description: "Deep tech mastery from engineers with proven expertise in enterprise AI systems."
        },
        {
            icon: Award,
            title: "100% Committed to Your Success",
            description: "We obsess over your outcomes and stand behind every solution we build."
        }
    ];

    const CompactFeatureCard = ({ icon: Icon, title, description, index, number }) => (
        <div 
            className="flex flex-col gap-4 p-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
        >
            <div className="flex items-center gap-3">
                <span className="text-blue-500 font-bold text-lg">{number}</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <h3 className="text-xl font-bold text-default">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>
    );

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-default">
                        Why <span style={{ color: '#60A5FA' }}>Choose Us</span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <CompactFeatureCard
                            key={index}
                            index={index}
                            number={String(index + 1).padStart(2, '0')}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};