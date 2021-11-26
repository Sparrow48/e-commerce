module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
