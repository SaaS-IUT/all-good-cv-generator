/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      myfont1: ["Climate Crisis", "cursive"],
      myfont2: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};

module.exports = config;
