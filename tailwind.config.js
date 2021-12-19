module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      maxWidth: {
        "8xl": "85rem",
        "4.5xl": "60rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
