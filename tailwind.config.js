/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ember: '#fb923c',
        'ember-dim': 'rgba(251,146,60,0.12)',
        'ember-border': 'rgba(251,146,60,0.3)',
        glass: 'rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
}
