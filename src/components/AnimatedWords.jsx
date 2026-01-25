import React, { useState, useEffect, useRef, useMemo } from 'react';
// Note: useOnScreen is imported from its own file now
import { useOnScreen } from '../hooks/useOnScreen'; 

export const AnimatedWords = ({ text, className = '', delay = 75, duration = 1.2, threshold = 0.4 }) => {
    const words = useMemo(() => text.split(' '), [text]);
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, '0px', threshold);

    return (
        <p ref={ref} className={className}> 
            {words.map((word, index) => (
                <span
                    key={index}
                    className="inline-block" 
                    style={{
                        animation: isVisible 
                            ? `blur-reveal-stagger ${duration}s ease-out ${index * delay}ms forwards`
                            : 'none',
                        opacity: 0, 
                    }}
                >
                    {word}{index < words.length - 1 ? '\u00A0' : ''} 
                </span>
            ))}
        </p>
    );
};