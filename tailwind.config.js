const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./components/**/*.[jt]sx?", "./pages/**/*.[jt]sx?"],
  theme: {
    container: {
      center: true,
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "3/5": "60%",
    },
    textColor: {
      black: "#2B2D42",
      primary: "#41E2BA"
      // secondary: "#ffed4a",
      // danger: "#e3342f",
    },
    borderColor: {
      black: "#2B2D42",
    },
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        white: "#FFFCF9",
        black: "#2B2D42",
      },
    },
  },
  variants: {
    text: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
