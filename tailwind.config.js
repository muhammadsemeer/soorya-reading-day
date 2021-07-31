module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "l-col": "#232323",
      },
      colors:{
        "light":"#F8F5F1",
        "primary-col": "#d36163;",

      },
      transitionTimingFunction: {
        "preLoader-timing": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      spacing: {
        4.0: "40%",
        4.2: "42%",
        "6px": "0.375rem",
        99: "30rem",
        97: "27rem",
        82: "24rem",
        98:"45rem"
      },
      fontFamily: {
        Mak: "Mak",
        "Mak-Bold": "Mak-Bold",
        "Cormorant-Unicase": "Cormorant Unicase",
        Mulish: "Mulish",
      },
      screens:{
        'cs':"1000px",
        '998':"998px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
