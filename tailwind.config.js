/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        success: '#295C29',
        danger: '#381616',
        light: '#f1f1f1',
        yellow: '#e8e454',
        bg: '#1a1a1d',
        bglight: '#2f2f2f',
        blue: '#161638',
        lightblue: '#31316d',
        lighttext: '#a1a1a6'
      },
      container: {
        screens : {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1536px',
        },
      }
    },
  },
  plugins: [],
}

