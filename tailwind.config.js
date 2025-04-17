/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F0F0F',
        'dark-gray': '#1A1A1A',
        'gradient-start': '#7F5AF0',
        'gradient-end': '#2CB67D',
        'crypto-blue': '#1E3A8A',
        'crypto-silver': '#E5E7EB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};