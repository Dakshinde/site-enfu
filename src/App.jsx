import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your existing components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';
import { WhyUs2 as AboutUs } from './pages/WhyUs2';
import { BlogPost } from './pages/BlogPost';
import { FeatureProduct } from './components/FeatureProduct';

// 1. Define the animation styles exactly as in your original file.
const ANIMATION_STYLES = `
@keyframes blur-reveal-stagger {
    0% { filter: blur(10px); opacity: 0; transform: translateY(-50px); }
    50% { filter: blur(5px); opacity: 0.5; }
    100% { filter: blur(0px); opacity: 1; transform: translateY(0); }
}
`;

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    return (
        <BrowserRouter>
            {/* 🟢 BASE COLOR: Use inline styles to reflect theme across the app */}
                {/* 🟢 BASE COLOR: Use themeColors.BG_PRIMARY here once context is used */}
                <div className="min-h-screen site-bg text-default overflow-x-hidden">
                    
                    <style>{ANIMATION_STYLES}</style>

                    {/* Navbar will now be updated to consume the theme */}
                    <Navbar isScrolled={isScrolled} /> 
                    <main>
                        <Routes>
                            <Route index element={<>
                                <HeroSection />
                                <FeatureProduct />
                                <ServicesSection />
                                <WhyUsSection />
                                <FaqSection />
                            </>} />
                            
                            {/* 🟢 NEW ROUTE: Dynamic path for individual blog posts */}
                            <Route path="/blogs/:id" element={<BlogPost />} />
                            
                            {/* Existing route for the main blogs index page */}
                            <Route path="/blogs" element={<Blogs />} /> 
                            
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<AboutUs />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
    );
}
