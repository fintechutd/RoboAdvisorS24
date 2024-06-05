/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'hsl(237, 63%, 64%)',
          'very-light': 'hsl(240,78%, 98%)',
          'custom-color': '#00837e',
          light: 'hsl(234, 14%,74%)',
          normal: 'hsl(23, 13%, 33%)',
          dark: 'hsl(232,13%,33%)',
        },
      },
    },
  },
  plugins: [],
};

