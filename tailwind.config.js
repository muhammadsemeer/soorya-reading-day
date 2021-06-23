module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "l-col": "#101010",
        "d-col": "#0f0f0f",
        "primary-col": "#d36163;",
      },
      transitionTimingFunction: {
        "preLoader-timing": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      spacing: {
        4.0: "40%",
        4.2: "42%",
        "6px":"0.375rem"
      },
      fontFamily:{
        "Mak":"Mak",
        "Mak-Bold":"Mak-Bold",
        "Cormorant-Unicase" : "Cormorant Unicase",
        "Mulish":"Mulish",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
