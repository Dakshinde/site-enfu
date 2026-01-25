/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-purple': '#052659',     // brand deep blue
        'accent-cyan': '#7DA0CA',       // brand mid blue
        'bright-cyan-button': '#C1E8FF',// brand light blue
        
      },
      // The animation and keyframes sections that were here have been REMOVED.
    },
  },
  plugins: [],
}