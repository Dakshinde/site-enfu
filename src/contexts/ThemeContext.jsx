import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const getInitial = () => {
        try {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark') return true;
            if (stored === 'light') return false;
        } catch {}
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return true;
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitial);

    const applyTheme = (dark) => {
        const root = document.documentElement;
        // Tailwind dark mode via class
        root.classList.toggle('dark', dark);
        // CSS variables light mode via data-theme
        if (dark) {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', 'light');
        }
        try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
    };

    useEffect(() => {
        applyTheme(isDarkMode);
        // Listen for system changes if no explicit preference stored
        const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
        const stored = (()=>{ try { return localStorage.getItem('theme'); } catch { return null; } })();
        const onChange = (e) => {
            if (!stored) {
                setIsDarkMode(e.matches);
            }
        };
        if (media) {
            media.addEventListener ? media.addEventListener('change', onChange) : media.addListener(onChange);
        }
        return () => {
            if (media) {
                media.removeEventListener ? media.removeEventListener('change', onChange) : media.removeListener(onChange);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        applyTheme(isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    // useMemo ensures themeColors is never undefined
    const themeColors = useMemo(() => ({
        BG_PRIMARY: isDarkMode ? 'bg-black' : 'bg-white',
        TEXT_PRIMARY: isDarkMode ? 'text-white' : 'text-gray-900',
        TEXT_SECONDARY: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    }), [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeColors }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        // This prevents the "undefined" crash
        return {
            isDarkMode: true,
            toggleTheme: () => {},
            themeColors: { BG_PRIMARY: 'bg-black', TEXT_PRIMARY: 'text-white', TEXT_SECONDARY: 'text-gray-400' }
        };
    }
    return context;
};
