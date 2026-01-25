import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import logo from '../assets/enfu-ai-logo.png';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ isScrolled }) => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-2 px-4">
            {/* Contained Navbar Container */}
            <div className="max-w-7xl mx-auto bg-white/90 rounded-full shadow-xl backdrop-blur-sm">
                <div className="flex justify-between items-center h-16 px-6">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white">
                            <img 
                                src={logo} 
                                alt="EnFu AI" 
                                className="w-14 h-14 object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold text-[#052659]">
                            EnFu AI
                        </span>
                    </Link>
                    
                    {/* Center Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link 
                            to="/" 
                            className={`text-base font-semibold transition-colors ${
                                isActive('/') 
                                    ? 'text-[#052659]' 
                                    : 'text-gray-600 hover:text-[#052659]'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className={`text-base font-semibold transition-colors ${
                                isActive('/about') 
                                    ? 'text-[#052659]' 
                                    : 'text-gray-600 hover:text-[#052659]'
                            }`}
                        >
                            About Us
                        </Link>
                        <Link 
                            to="/blogs" 
                            className={`text-base font-semibold transition-colors ${
                                isActive('/blogs') 
                                    ? 'text-[#052659]' 
                                    : 'text-gray-600 hover:text-[#052659]'
                            }`}
                        >
                            Blogs
                        </Link>
                    </div>

                    {/* Right Section - CTA Button */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link to="/contact">
                            <button className="px-6 py-2 bg-[#052659] text-white font-bold text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-[#052659]" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#052659]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-2 mx-4 bg-white rounded-3xl border-2 border-[#052659] shadow-lg p-4">
                    <div className="flex flex-col space-y-2">
                        <Link 
                            to="/" 
                            onClick={() => setMobileMenuOpen(false)}
                            className={`px-4 py-2 font-medium rounded-full text-center ${
                                isActive('/') 
                                    ? 'text-white bg-[#052659]' 
                                    : 'text-gray-600'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            onClick={() => setMobileMenuOpen(false)}
                            className={`px-4 py-2 font-medium rounded-full text-center ${
                                isActive('/about') 
                                    ? 'text-white bg-[#052659]' 
                                    : 'text-gray-600'
                            }`}
                        >
                            About Us
                        </Link>
                        <Link 
                            to="/blogs" 
                            onClick={() => setMobileMenuOpen(false)}
                            className={`px-4 py-2 font-medium rounded-full text-center ${
                                isActive('/blogs') 
                                    ? 'text-white bg-[#052659]' 
                                    : 'text-gray-600'
                            }`}
                        >
                            Blogs
                        </Link>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                            <button className="w-full px-4 py-2 bg-gradient-to-r from-[#052659] to-[#5483B3] text-white font-semibold rounded-full mt-2">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};