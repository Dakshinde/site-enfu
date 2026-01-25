import React, { useRef } from 'react';

export const Button = ({ children, className = '', ...props }) => {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - (rect.left + rect.width / 2);
        const my = e.clientY - (rect.top + rect.height / 2);
        const strength = 0.06; // smaller is subtler
        const tx = Math.max(-8, Math.min(8, mx * strength));
        const ty = Math.max(-8, Math.min(8, my * strength));
        el.style.transform = `translate(${tx}px, ${ty}px)`;
    };

    const handleLeave = () => {
        const el = ref.current;
        if (el) el.style.transform = '';
    };

    return (
        <button
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={`px-6 py-3 rounded-full font-semibold transition-transform duration-200 focus:outline-none text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};