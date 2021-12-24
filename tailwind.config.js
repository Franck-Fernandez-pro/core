module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0FA9E6',
          light: '#3FBAEB',
          dark: '#0C87B8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-sherif',
      },
    },
  },
  plugins: [],
};
