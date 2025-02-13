/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        success: '#295c29',
        lightsuccess: '#51ac51',
        danger: '#bd362f',
        lightdanger: '#cb645b',
        lightgray: '#f1f1f1',
        yellow: '#e8e454',
        bg: '#1a1a1d',
        bglight: '#2f2f2f',
        blue: '#161638',
        lightblue: '#9d9dcd',
        mediumblue: '#31316d',
        lighttext: '#a1a1a6'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        xxl: '1536px',
        ultrawide: '2560',
      },
      
    },
  },
  plugins: [],
}

