/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
      },
      colors: {
        // Custom dark theme colors
        'dark-bg': '#0a0a0a',
        'dark-sidebar': '#1a1a1a',
        'dark-accent': '#00d4ff',
        'dark-text': '#ffffff',
        'dark-muted': '#a0a0a0',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}
