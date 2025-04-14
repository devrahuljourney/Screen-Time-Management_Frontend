/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: {
          black: "#000000",
          transparent: "#1E1E1E",
          blue: "#4C4DFF",
          100: "#2a2a2a",
          200: "#3a3a3a",
          300: "#4a4a4a",
        },
        tt: {
          white: "#ffffff",
          gray700: "#B9B9B9",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#cccccc",
        },
      },
    },
  },
  plugins: [],
};
