/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ciutadella: ['Ciutadella', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
