import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedWords } from '../components/AnimatedWords';
import heroImg from '../assets/ai-chip-image.png';


export const WhyUs2 = () => {
    const parallaxRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const offset = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${offset * 0.15}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="min-h-screen relative bg-[#C1E8FF] overflow-hidden pt-28">
            {/* Clean Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#5483B3]/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#7DA0CA]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-[600px] h-[600px] bg-[#052659]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <section className="relative z-10 py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="space-y-8">
                            <div>
                                <span className="px-4 py-2 bg-[#052659]/10 text-[#052659] rounded-full text-sm font-semibold border border-[#052659]/20 inline-block mb-6">
                                    ABOUT US
                                </span>
                                <h1 className="text-5xl md:text-6xl font-bold text-[#021024] mb-6 leading-tight">
                                    About <span className="text-[#052659]">EnFu AI</span>
                                </h1>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    We deliver enterprise-grade AI solutions with world-class design, security, and reliability. Our team blends deep technical expertise with creative product thinking to help you win in your market.
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <button className="px-8 py-3 bg-[#052659] text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        Get in touch
                                    </button>
                                </Link>
                                <Link to="/blogs">
                                    <button className="px-8 py-3 border-2 border-[#052659] text-[#052659] font-bold rounded-full hover:bg-[#052659]/10 transition-all duration-300">
                                        Read our thoughts
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-2xl scale-110 shadow-2xl rounded-2xl" ref={parallaxRef}>
                                <img src={heroImg} alt="AI illustration" className="w-full rounded-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white p-8 rounded-3xl border-2 border-[#052659] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#052659] to-[#5483B3] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#021024] mb-3">Enterprise Integrations</h3>
                            <p className="text-gray-600 text-base leading-relaxed">Connected systems, secure data flows, and scalable deployments that grow with your business.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border-2 border-[#052659] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#5483B3] to-[#7DA0CA] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#021024] mb-3">Product Design</h3>
                            <p className="text-gray-600 text-base leading-relaxed">Human-centered AI interfaces that increase adoption and retention through intuitive design.</p>
                        </div>
                    </div>

                    {/* Additional Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-3xl border-2 border-[#052659] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#021024] mb-3">Data to Decisions</h3>
                            <p className="text-gray-600 leading-relaxed">Turn logs, documents and product data into actionable insights with custom pipelines.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border-2 border-[#052659] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#021024] mb-3">Automation at Scale</h3>
                            <p className="text-gray-600 leading-relaxed">Reduce manual tasks by up to 75% with intelligent automation tailored to your workflows.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border-2 border-[#052659] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#021024] mb-3">Responsible AI</h3>
                            <p className="text-gray-600 leading-relaxed">Observability, guardrails and human-in-the-loop to keep models safe and reliable.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
