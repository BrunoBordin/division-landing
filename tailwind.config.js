/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Escaneia arquivos HTML na raiz
    './src/**/*.{html,js}', // Escaneia arquivos em subdiretórios (se aplicável)
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F0F0F', // Fundo principal
        'dark-gray': '#1A1A1A', // Fundo secundário
        'gradient-start': '#7F5AF0', // Início do gradiente (roxo)
        'gradient-end': '#2CB67D', // Fim do gradiente (verde)
        'crypto-blue': '#1E3A8A', // Azul escuro para identidade de cripto
        'crypto-silver': '#E5E7EB', // Prata metálico para detalhes
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Fonte personalizada
      },
    },
  },
  plugins: [],
};