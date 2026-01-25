import React from 'react';
import { Users, Award, Code, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, number, label, suffix = '', index }) => (
    <div 
        className="text-center p-8 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-6 mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/50">
            <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">
            {number}{suffix}
        </div>
        <div className="text-lg text-muted font-medium">
            {label}
        </div>
    </div>
);

export const StatsSection = () => {
    const stats = [
        { icon: Code, number: '50', suffix: '+', label: 'Projects Delivered' },
        { icon: Users, number: '5', suffix: '+', label: 'Years Combined Experience' },
        { icon: Award, number: '100', suffix: '%', label: 'Commitment to Excellence' },
        { icon: TrendingUp, number: '24', suffix: '/7', label: 'Technical Support' }
    ];

    return (
        <section className="py-24 site-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card-bg rounded-3xl border border-white/10 shadow-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <StatCard key={index} index={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
