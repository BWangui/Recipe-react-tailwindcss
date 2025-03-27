// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark background reminiscent of coffee or chocolate
        background: '#2C1A14',
        // Slightly lighter background for cards or sections
        card: '#3D2B24',
        // Warm orange accent for buttons or highlights
        accent: '#FBB249',
        // White text for high contrast
        textLight: '#FFFFFF',
        // Muted text or secondary text
        textMuted: '#C5A991',
      },
    },
  },
  plugins: [],
}
