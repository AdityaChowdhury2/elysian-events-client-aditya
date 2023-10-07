/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'service': 'url("/services.png")',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))'
    },
    colors: {
      'primary-color': '#FF5733',
      'primary-dark': '#E6451A',
      'light': '#F7F7F7',
      'gray': '#333333',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serifda',
        'dela-gothic': 'Dela Gothic One, cursive',
        'cedarville-cursive': 'Cedarville Cursive,cursive',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: true,
  }
}