import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedWords } from '../components/AnimatedWords';
import heroImg from '../assets/ai-chip-image.png';

export const Home2 = () => {
    // Static dark-mode Home variant
    const svgColors = {
        G1_STOP1: '#052022',
        G1_STOP2: '#02121a',
        CIRCLE1: '#063542',
        CIRCLE2: '#02303a',
        CIRCLE3: '#042a3a',
        CARD_BG: '#071018',
        CARD_BORDER: 'gray-800/50'
    };

    const textMain = 'text-default';
    const textSecondary = 'text-gray-300';
    const accentCyanClass = 'from-accent-cyan to-bright-cyan-button';

    return (
        <div className={`pt-24 min-h-screen relative overflow-hidden site-bg ${textMain}`}>
            
            {/* Decorative animated background made with SVG blobs and CSS animations */}
            <div className="absolute inset-0 -z-10">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="g1" x1="0%" x2="100%">
                            {/* 🟢 Dynamic SVG Colors */}
                            <stop offset="0%" stopColor={svgColors.G1_STOP1} />
                            <stop offset="100%" stopColor={svgColors.G1_STOP2} />
                        </linearGradient>
                        <filter id="blur">
                            <feGaussianBlur stdDeviation="60" />
                        </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#g1)" />
                    <g filter="url(#blur)" opacity="0.85">
                        {/* 🟢 Dynamic SVG Circle Colors */}
                        <circle cx="20%" cy="30%" r="160" fill={svgColors.CIRCLE1} className="blob-animate-1" />
                        <circle cx="80%" cy="20%" r="140" fill={svgColors.CIRCLE2} className="blob-animate-2" />
                        <circle cx="60%" cy="75%" r="200" fill={svgColors.CIRCLE3} className="blob-animate-3" />
                    </g>
                </svg>
            </div>

            <section className="relative z-10 py-28 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        {/* 🟢 Dynamic Text Colors */}
                        <AnimatedWords text={'Build faster. Smarter. With EnFu AI.'} className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${textMain}`} delay={90} />
                        <p className="text-gray-300 max-w-xl mb-8">We empower enterprises with custom AI-powered products and workflows that scale. Reduce manual work, find insights, and create delightful user experiences powered by state-of-the-art models.</p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="inline-block">
                                {/* 🟢 Dynamic Button Gradient */}
                                <button className={`px-6 py-3 rounded-full bg-gradient-to-r ${accentCyanClass} font-semibold text-white`}>Get in touch</button>
                            </Link>
                            <Link to="/blogs" className="inline-block">
                                {/* 🟢 Dynamic Button Text and Border */}
                                <button className={`px-6 py-3 rounded-full border border-${svgColors.CARD_BORDER} ${textMain}`}>Read our thoughts</button>
                            </Link>
                        </div>

                        {/* Feature Boxes */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* 🟢 Dynamic Card Background and Border */}
                            <div className={`p-4 rounded-2xl border border-gray-800/50 card-bg`}>
                                <h4 className="font-bold">Enterprise Integrations</h4>
                                    <p className={`${textSecondary} text-sm`}>Connected systems, secure data flows and scalable deployments.</p>
                            </div>
                                <div className={`p-4 rounded-2xl border border-gray-800/50 card-bg`}>
                                <h4 className="font-bold">Product Design</h4>
                                    <p className={`${textSecondary} text-sm`}>Human-centered AI interfaces that increase adoption and retention.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-md">
                            {/* Image Styling */}
                            <img src={heroImg} alt="AI illustration" className={`w-full rounded-2xl shadow-2xl border border-${svgColors.CARD_BORDER}`} />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Secondary Feature Section */}
            <section className="relative z-10 py-16 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Data to Decisions', 'Automation at Scale', 'Responsible AI'].map((title, index) => (
                        <div key={index} className={`p-6 rounded-2xl border border-gray-800/50 card-bg`}>
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className={`${textSecondary} text-sm`}>
                                {index === 0 && "Turn logs, documents and product data into actionable insights with custom pipelines."}
                                {index === 1 && "Reduce manual tasks by up to 75% with intelligent automation tailored to your workflows."}
                                {index === 2 && "Observability, guardrails and human-in-the-loop to keep models safe and reliable."}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Inline styles for blob animations remain unchanged as the colors are now handled in the SVG fill attributes */}
            <style>{`
                .blob-animate-1 { animation: move1 12s ease-in-out infinite; }
                .blob-animate-2 { animation: move2 14s ease-in-out infinite; }
                .blob-animate-3 { animation: move3 18s ease-in-out infinite; }

                @keyframes move1 { 0%{transform:translate(0,0)}50%{transform:translate(-30px,20px)}100%{transform:translate(0,0)} }
                @keyframes move2 { 0%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}100%{transform:translate(0,0)} }
                @keyframes move3 { 0%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}100%{transform:translate(0,0)} }
            `}</style>
        </div>
    );
};