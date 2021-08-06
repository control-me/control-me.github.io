module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors
      colors: {
        brand: {
          50: "#e1f5fa",
          100: "#b4e5f3",
          200: "#84d4ec", // main
          300: "#53c3e6",
          400: "#23b7e5",
          500: "#00abe4",
          600: "#009dd6",
          700: "#008ac4",
          800: "#0079b1",
          900: "#005a92",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
