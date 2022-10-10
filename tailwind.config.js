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
        "h1-grey": "#C1CCEA",
        "primary-1": "#DAE0F2",
        fellow: "#EDFEFE",
        "dark-fellow": "#0E1426",
        "primary-9": "#172240",
        blue: "#4463BE",
        "dark-blue": "#233360",
        "dark-white": "#E4E6EC",
        "dark-grey": "#EEF2FF",
        "dark-blue": "#101218",
        "blue-main": "#4665C0",
        "weird-green": "#80EDEF",
        "light-blue": "#A3B2E0",
        "darker-blue": "#5772C5",
        "darker-grey": "#C5CCEB",
        "placeholder-grey": "#A5A6A8",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
