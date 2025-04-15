/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0A0A0A", // Updated background color
        "gradient-start": "#ED109B", // Gradient start (from logo)
        "gradient-end": "#6D00ED", // Gradient end (from logo)
        "text-light": "#E5E7EB", // Light gray for text (Tailwind's gray-200)
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};