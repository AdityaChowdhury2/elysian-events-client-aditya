/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    backgroundImage: {
      'service': 'url("/services.png")',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'stats': "url('https://i.ibb.co/4THnNmL/aac2a2277a.jpg')",
      'header': "url('https://i.ibb.co/hc6qFPF/party-banner.jpg')"
    },
    extend: {
      listStyleImage: {
        checkMark: 'url("/checkmark.svg")',
      },
      container: {
        center: true,
        screens: {
          lg: '1440px',
        },
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