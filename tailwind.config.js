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
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
