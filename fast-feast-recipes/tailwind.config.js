// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',    // primary accent (for buttons, highlights)
        secondary: '#4ecdc4',  // secondary accent (for other highlights)
        accent: '#1a535c',     // dark accent (for navbars, headings)
        background: '#f7fff7', // light background color
        text: '#333333',       // dark text color
      },
    },
  },
  plugins: [],
}
