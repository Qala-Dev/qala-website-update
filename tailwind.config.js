const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-bg": "#F6F7FC",
        "dark-bg": "#060916",
        "nav-blue": "#141B3A",
        "nav-white": "#F6F7FC",
        "facebook-blue": "#1877F2",
        "twitter-blue": "#1DA1F2",
        "linkedin-blue": "#2867B2",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
