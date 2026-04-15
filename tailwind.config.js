/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#151030',
        tertiary: '#232631',
        ember: '#fb923c',
        'ember-dim': 'rgba(251,146,60,0.12)',
        'ember-border': 'rgba(251,146,60,0.3)',
      },
      boxShadow: {
        card: '0px 35px 120px -15px rgba(83,52,131,0.6)',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
}
