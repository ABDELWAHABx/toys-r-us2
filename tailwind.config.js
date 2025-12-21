/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff8f0',
          100: '#ffe6cc',
          200: '#ffd4a3',
          300: '#ffc27a',
          400: '#ffb051',
          500: '#ff9e28',
          600: '#f58c1f',
          700: '#e67a1d',
          800: '#cc6819',
          900: '#995015',
        },
        secondary: {
          50: '#f0f8ff',
          100: '#c5e4ff',
          200: '#9ad0ff',
          300: '#6fbcff',
          400: '#44a8ff',
          500: '#1994ff',
          600: '#1682ff',
          700: '#1270e6',
          800: '#0d5acc',
          900: '#084499',
        },
        accent: {
          50: '#fff9e6',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
