/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        iThin: ["Inter-thin", "sans-serif"],
        iItalic: ["Inter-italic", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#D5F7C9",
          500: "#9AD983",
        },
        secondary: {
          500: "#323434",
        },
        danger: {
          500: "#FF8989",
        },
        warning: {
          500: "#FFC804",
        },
        general: {
          500: "#F5F5F5",
          900: "#FFFFFF",
        },
        dark: {
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
