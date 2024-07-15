/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#e002a2",
        second: "#47019d",
        three: "#e00256",
        black: "#212121",
        white: "#ffffff",
        gray: "#808080e2",
        orange: "#FE8C00",
      },
    },
  },
  plugins: [],
};
