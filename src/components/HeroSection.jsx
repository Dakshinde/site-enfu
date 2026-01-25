import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FaultyTerminal from './FaultyTerminal';

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16 pb-16">
            {/* FaultyTerminal Background */}
            <div className="absolute inset-0">
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#ffffff"
                    mouseReact
                    mouseStrength={0.5}
                    pageLoadAnimation
                    brightness={1.5}
                />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center min-h-[calc(100vh-8rem)] py-4">
                <div className="space-y-6 text-center max-w-4xl mx-auto">
                        <div className="flex justify-center">
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm text-blue-600 rounded-full text-sm font-semibold border border-blue-500/20 shadow-lg">
                                ✨ AI-Powered Solutions
                            </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-default">Creating Better</span>
                            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                                AI Solutions
                            </span>
                        </h1>
                        
                        <p className="text-xl leading-relaxed max-w-xl mx-auto font-bold" style={{ color: '#052659' }}>
                            Transform your business with intelligent automation. We deliver cutting-edge AI solutions that streamline operations and drive growth.
                        </p>

                        <div className="space-y-3 max-w-xl mx-auto">
                            <div className="flex items-center gap-3 text-default group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">24/7 AI-Powered Customer Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-default group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">Intelligent Voice & Chat Agents</span>
                            </div>
                            <div className="flex items-center gap-3 text-default group hover:translate-x-2 transition-transform duration-300">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">Seamless Workflow Automation</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Link to="/contact">
                                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 relative overflow-hidden">
                                    <span className="relative z-10">Get Started</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold backdrop-blur-sm hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    );
};