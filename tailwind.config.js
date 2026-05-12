/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      // Custom animation utilities (micro-interactions only)
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'circ-out': 'cubic-bezier(0, 0.55, 0.45, 1)',
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        shimmer: 'shimmer 2s infinite',
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};