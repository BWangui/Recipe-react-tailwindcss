// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',      // Use for buttons, highlights, etc.
        secondary: '#FFB400',    // Use for accents or secondary elements.
        accent: '#00A8E8',       // Use for headings and icons.
        background: '#E91E63',   // A vibrant pink for a global background.
        sectionOne: '#F06292',   // A soft pink.
        sectionTwo: '#BA68C8',   // A vibrant purple.
        sectionThree: '#4FC3F7', // A bright blue.
        textLight: '#FFFFFF',    // White text.
        textDark: '#2D3436',     // Dark grey text.
      },
    },
  },
  plugins: [],
}
