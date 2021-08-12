module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        760: "760px",
        700: "700px",
        600: "600px",
        400: "400px",
      },
      maxHeight: {
        1000: "1000px",
        760: "760px",
        700: "700px",
        600: "600px",
        200: "200px",
      },
      height: {
        xxxl: "1200px",
        xxxxl: "1500px",
        750: "750px",
      },
      width: {
        600: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
