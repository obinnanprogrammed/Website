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
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        fadeLeft: 'fadeInLeft 1s',
        fadeRight: 'fadeInRight 1s',
        fadeUp: 'fadeInUp 1s',
        fadeDown: 'fadeInDown 1s'
      }
    },
  },
  plugins: [],
}

