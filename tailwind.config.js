/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        "foot-blue": "#0C013D",
      },
    },
  },
  plugins: [],
};
