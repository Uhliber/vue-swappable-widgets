/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBEEDA",
          100: "#FAECD6",
          200: "#F8E4C4",
          300: "#F6DCB1",
          400: "#F4D5A4",
          500: "#F2CC8E",
          600: "#EDB863",
          700: "#E79F2D",
          800: "#D28B18",
          900: "#AE7314",
          950: "#926111"
        }
      },
      transitionProperty: {
        'scale': 'height, width',
      }
    }
  },
  plugins: [],
}