// src/components/Footer.jsx

import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="card-bg py-12 text-default border-t border-black/10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-xl font-bold">EnFu AI</span>
                <p className="mt-4 text-sm text-muted">© {new Date().getFullYear()} EnFu AI. All rights reserved.</p>

                <div className="flex justify-center items-center space-x-6 mt-4">
                    <a href="mailto:enfuaisolutions@gmail.com" className="flex items-center gap-2 text-muted hover:text-accent" aria-label="Email EnFu AI">
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">enfuaisolutions@gmail.com</span>
                    </a>

                    <a href="https://www.instagram.com/enfu.ai/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="EnFu AI Instagram">
                        <Instagram className="w-5 h-5" />
                    </a>

                    <a href="https://www.linkedin.com/company/enfu-ai/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="EnFu AI LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};