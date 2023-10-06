/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FF5733',
      'primary-dark': '#E6451A',
      'neutral': '#F7F7F7',
      'gray': '#333333',
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serifda'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: true,
  }
}