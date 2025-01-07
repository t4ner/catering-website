/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3639",
        secondary: "#A27B5C",
        accent: "#DCD7C9",
        light: "#F9F5EB",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Montserrat", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shine: "shine 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
