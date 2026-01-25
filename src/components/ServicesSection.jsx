// src/components/ServicesSection.jsx

import React from 'react';
import { MessageSquare, Phone, Settings, TrendingUp, Cloud, Shield } from 'lucide-react'; 

const ServiceCard = ({ icon: Icon, title, description, gradient, index }) => (
    <div 
        className="group card-bg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-blue-500/30 hover:-translate-y-2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
        <div className={`w-16 h-16 rounded-xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-default mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>
    </div>
);

export const ServicesSection = () => {
    const services = [
        {
            icon: MessageSquare,
            title: "AI Chatbots",
            description: "Deploy 24/7 AI assistants for instant customer service, lead qualification, and support ticketing with natural language understanding.",
            gradient: "bg-gradient-to-br from-blue-600 to-blue-500"
        },
        {
            icon: Phone,
            title: "Voice Agents",
            description: "Human-like AI voice agents with sub-500ms latency. Handle interruptions intelligently, manage appointments, and follow-ups seamlessly.",
            gradient: "bg-gradient-to-br from-cyan-600 to-cyan-500"
        },
        {
            icon: Settings,
            title: "Workflow Automation",
            description: "Intelligent automation across your entire tech stack. Data entry, reporting, system integrations, and document processing—all automated.",
            gradient: "bg-gradient-to-br from-purple-600 to-purple-500"
        },
        {
            icon: TrendingUp,
            title: "Predictive Analytics",
            description: "Predict customer churn, sales forecasts, and market trends before they happen. Make decisions backed by real-time data intelligence.",
            gradient: "bg-gradient-to-br from-indigo-600 to-indigo-500"
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure designed for AI workloads with enterprise-grade security and reliability.",
            gradient: "bg-gradient-to-br from-teal-600 to-teal-500"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Enterprise-grade encryption and compliance standards to keep your data safe while maintaining peak performance.",
            gradient: "bg-gradient-to-br from-emerald-600 to-emerald-500"
        }
    ];

    return (
        <section id="services" className="py-24 site-bg text-default">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold border border-blue-500/20 inline-block mb-4">
                        OUR SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-default">
                        AI Solutions for Your Business
                    </h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                        Transform your operations with intelligent automation designed to scale with your business needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} index={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};