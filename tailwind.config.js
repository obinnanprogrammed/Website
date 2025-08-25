/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        navy: "#000020",
        columbia: "#AFDCFF"
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeLeft: 'fadeInLeft 1s ease-out forwards',
        fadeRight: 'fadeInRight 1s ease-out forwards',
        'fadeRight-75': 'fadeInRight 1s ease-out 75ms forwards',
        'fadeRight-150': 'fadeInRight 1s ease-out 150ms forwards',
        'fadeRight-225': 'fadeInRight 1s ease-out 225ms forwards',
        'fadeRight-300': 'fadeInRight 1s ease-out 300ms forwards',
        fadeUp: 'fadeInUp 1s ease-out forwards',
        fadeDown: 'fadeInDown 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}

