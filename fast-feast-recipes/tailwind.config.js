/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'splash': "url('/images/background.jpg')",
      },
      colors: {
        primary: "#E63946", 
        secondary: "#F1FAEE",
        accent: "#A8DADC",
        darkBlue: "#1D3557",
      },
    },
  },
  plugins: [],
};
