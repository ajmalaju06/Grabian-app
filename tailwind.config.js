module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brown-light": "#b1aa98",
        "gray-light": "#f5f5f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
