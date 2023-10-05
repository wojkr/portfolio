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
        primary1: "-4rem -4rem 0 -1px #2C233D,-4rem -4rem 0 1px #3CAEA3;",
        primary2: "4rem -4rem 0 -1px #2C233D,4rem -4rem 0 1px #F39C12;",
        primary3: "4rem -4rem 0 -1px #2C233D,4rem -4rem 0 1px #97CE4C;",
      },
      colors: {
        "dark-1": "#2C233D",
        "primary-1": "#3CAEA3",
        "primary-2": "#F39C12",
        "primary-3": "#97CE4C",
        "primary-light-1": "#a4e0da",
        "primary-light-2": "#f8c572",
        "primary-light-3": "#c5e49b",

        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-3":
          "linear-gradient(70deg, hsl(75, 57%, 55%),hsl(95, 57%, 55%))",
        "gradient-2":
          "linear-gradient(70deg, hsl(27, 90%, 51%),hsl(47, 90%, 51%))",
        "gradient-1":
          "linear-gradient(70deg, hsl(164,49%,46%),hsl(184,49%,46%))",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        brush: "url('../src/assets/brush.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
