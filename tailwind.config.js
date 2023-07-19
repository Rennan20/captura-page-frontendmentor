const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        orange: {
          primary: "hsl(26, 100%, 55%)",
          pale: "hsl(25, 100%, 94%)",
        },
        blue: {
          "very-dark": "hsl(220, 13%, 13%)",
          "dark-grayish": "hsl(219, 9%, 45%)",
          grayish: "hsl(220, 14%, 75%)",
          "light-grayish": "hsl(223, 64%, 98%)",
        },
        white: "hsl(0, 0%, 100%)",
        black: "hsla(0, 0%, 0%, 0.75)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
        kumbhSans: ["var(--font-kumbh-sans)", ...fontFamily.sans],
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive"],
    },
  },
  plugins: [],
};
