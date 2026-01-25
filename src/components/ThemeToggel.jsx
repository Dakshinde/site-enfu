// ThemeToggel.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<button
			aria-label="Toggle theme"
			onClick={toggleTheme}
			className={`relative inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
			title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
	 >
			<span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 blur-md opacity-0 hover:opacity-100 transition-opacity" />
			{isDarkMode ? (
				<Sun className="w-5 h-5 text-default" />
			) : (
				<Moon className="w-5 h-5 text-default" />
			)}
		</button>
	);
};

export default ThemeToggle;