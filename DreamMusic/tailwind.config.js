/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#600000',
        'mid-red': '#600000',
        'light-red': '#400000',
        'black-red': '#300000',
        'black': '#000000',

        'grayish': '#0e0e0e'
      }
    },
  },
  plugins: [],
}

