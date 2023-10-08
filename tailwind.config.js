/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        accent: "0 0 0.6rem #222",
      },
      boxShadow: {
        primary1: "4rem -4rem 0 -1px #2C233D,4rem -4rem 0 1px #E79CE1;",
        primary2: "4rem -4rem 0 -1px #2C233D,4rem -4rem 0 1px #F05D5E;",
        primary3: "4rem -4rem 0 -1px #2C233D,4rem -4rem 0 1px #0A81D1;",
      },
      colors: {
        "dark-1": "#2C233D",
        "primary-1": "#E79CE1",
        "primary-2": "#F05D5E",
        "primary-3": "#0A81D1",
        "primary-light-1": "#EFBDEB",
        "primary-light-2": "#F6A2A2",
        "primary-light-3": "#77C5F9",

        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-3": "linear-gradient(70deg, #77C5F9, #0A81D1)",
        "gradient-2": "linear-gradient(70deg, #F6A2A2, #F05D5E)",
        "gradient-1": "linear-gradient(70deg, #EFBDEB, #E79CE1)",
      }),
      fontFamily: {
        title: ["Orbitron", "sans-serif"],
        main: ["Jost", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2100px",
      xxxl: "2500px",
    },
  },
  plugins: [],
};
