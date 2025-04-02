// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackCoffee: '#3B3024',  // Overall background
        cardBg: '#3D2B24',       // Card background for meals
        primary: '#E4291D',      // For primary buttons
        secondary: '#1D2636',    // For secondary actions
        accent: '#FBB249',       // For highlights, headings, favorites button, etc.
        highlight: '#08396A',    // For any additional accents (if needed)
        text: '#FFFFFF',         // Default text (white)
        textMuted: '#C5A991',     // Muted text for descriptions
      },
    },
  },
  plugins: [],
};
