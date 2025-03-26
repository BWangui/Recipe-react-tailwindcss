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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveIn: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        moveIn: "moveIn 1.5s ease-out",
      },
      colors: {
        maroonBrown: "#964B00",
      },
    },
  },
  plugins: [],
};
