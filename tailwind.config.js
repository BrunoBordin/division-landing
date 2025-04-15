/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0e0e0e",
        "gradient-purple": "#6B46C1",
        "gradient-blue": "#3B82F6",
        "gradient-cyan": "#06B6D4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};