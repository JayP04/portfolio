/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm palette
        cream: {
          50: '#FFFCF9',
          100: '#FAF7F2',
          200: '#F5F0E8',
        },
        coffee: {
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
        terracotta: {
          400: '#E89580',
          500: '#D4735E',
          600: '#C05746',
        },
        warm: {
          gray: '#6B5B4B',
          charcoal: '#2C2C2C',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}
