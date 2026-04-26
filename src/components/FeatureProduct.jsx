import React from 'react';
import { ExternalLink, Sparkles, Shield, BarChart3, MessageSquare, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import MagicBento from './MagicBento';

export const FeatureProduct = () => {
    // 🟢 Safeguard: Handle potential undefined context
    const theme = useTheme();
    const themeColors = theme?.themeColors || { BG_PRIMARY: 'bg-black', TEXT_PRIMARY: 'text-white', TEXT_SECONDARY: 'text-gray-400' };

    const productFeatures = [
        { 
            icon: Zap, 
            title: "Auto Scheduling", 
            desc: "Plan and schedule posts across all platforms with intelligent timing suggestions." 
        },
        { 
            icon: BarChart3, 
            title: "Analytics Dashboard", 
            desc: "Track performance with real-time insights and comprehensive analytics." 
        },
        { 
            icon: MessageSquare, 
            title: "AI DMs", 
            desc: "Automate personalized engagement with AI-powered responses at scale." 
        },
        { 
            icon: Shield, 
            title: "Brand Safety", 
            desc: "Monitor and defend reputation in real-time using context-aware systems." 
        },
    ];

    return (
        <section id="product" className="py-24 bg-white overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Our First Internal Venture
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-3">
                        Meet
                        <a
                            href="https://fuorasocial.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Fuora Social website"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                        >
                            <span>Fuora Social</span>
                            <span className="inline-block animate-pulse">
                                <ExternalLink className="w-6 h-6" />
                            </span>
                        </a>
                    </h2>
                    <p className="text-black max-w-2xl text-lg">
                        Fuora Social is an AI-powered platform designed to manage and automate 17+ social media channels from one unified dashboard.
                    </p>
                    <a
                        href="https://fuorasocial.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mt-6 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                        <span>Click here to explore</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>

                <div className="flex justify-center">
                    <MagicBento
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="96, 165, 250"
                    />
                </div>
            </div>
        </section>
    );
};
