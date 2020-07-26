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
    borderColor: {
      black: "#2B2D42",
      primary: "#41E2BA",
    },
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        white: "#FFFCF9",
        black: "#2B2D42",
        primary: "#41E2BA",
        onyx: "#313638",
        alabaster: "#E0DFD5",
      },
      textColor: {
        black: "#2B2D42",
        primary: "#41E2BA",
        white: "#FFFCF9",
        alabaster: "#E0DFD5",
        onyx: "#313638",
        // secondary: "#ffed4a",
        // danger: "#e3342f",
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundColor: {
        alabaster: "#E0DFD5",
        onyx: "#313638",
        bluebg: "#5398BE",
      },
      padding: {
        28: "7rem",
        36: "9rem"
      }
    },
  },
  variants: {
    text: ['responsive', 'hover'],
    cursor: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
