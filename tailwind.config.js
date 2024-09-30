/** @type {import('tailwindcss').Config} */
// TypeScript type hints for better editor support when working with Tailwind CSS.

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./index.html", 
    "./public/index.html", 
  ],
  darkMode: "media" /* or "class" or "media"*/,
  theme: {
    extend: {}, // Extend the default theme here
  },
  variants: {
    extend: {}, // variant settings (like hover, focus, etc.)
  },
  plugins: [], // Add plugins if needed
};
