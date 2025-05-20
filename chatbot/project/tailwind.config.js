/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#85ACFF',
          400: '#5C90FF',
          500: '#3373FF',
          600: '#0A56FF',
          700: '#0042E6',
          800: '#0033B3',
          900: '#002480',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          50: '#F4EEFF',
          100: '#E9DEFF',
          200: '#D4BDFF',
          300: '#BF9BFF',
          400: '#AA7AFF',
          500: '#9558FF',
          600: '#8037FF',
          700: '#6B15FF',
          800: '#5700F3',
          900: '#4300C0',
        },
        accent: {
          DEFAULT: '#10B981',
          50: '#E6FFF7',
          100: '#CCFFF0',
          200: '#99FFE0',
          300: '#66FFD1',
          400: '#33FFC1',
          500: '#00FFB2',
          600: '#00E69F',
          700: '#00B37D',
          800: '#00805A',
          900: '#004D36',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};