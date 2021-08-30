module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black:{
          50: '#303030',
          100: '#2b2b2b',
          200: '#262626',
          300: '#222222',
          400: '#1d1d1d',
          500: '#181818',
          600: '#131313',
          700: '#0e0e0e',
          800: '#0a0a0a',
          900: '#050505'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
