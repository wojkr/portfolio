/** @type {import('tailwindcss').Config} */
const primary1 = "#E79CE1";
const primary2 = "#F05D5E";
const primary3 = "#0A81D1";
const dark1 = "#2C233D";
const primaryLight1 = "#EFBDEB";
const primaryLight2 = "#F6A2A2";
const primaryLight3 = "#77C5F9";
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-1": `linear-gradient(70deg, ${primaryLight1}, ${primary1})`,
        "gradient-2": `linear-gradient(70deg, ${primaryLight2}, ${primary2})`,
        "gradient-3": `linear-gradient(70deg, ${primaryLight3}, ${primary3})`,
        "gradient-animation-2": `linear-gradient(70deg, ${primaryLight2}, ${primary2}, ${primaryLight2}, ${primary2})`,
        "gradient-animation-3": `linear-gradient(70deg, ${primaryLight3}, ${primary3}, ${primaryLight3})`,
      }),
      backgroundPosition: {
        "position-0": "0% 0%",
        "position-50": "50% 0%",
        "position-100": "100% 0%",
      },
      backgroundSize: {
        "size-500": "500%",
        "size-300": "300%",
        "size-100": "100% 0",
      },
      boxShadow: {
        primary1: `4rem -4rem 0 -1px ${dark1},4rem -4rem 0 1px ${primary1}`,
        primary2: `4rem -4rem 0 -1px ${dark1},4rem -4rem 0 1px ${primary2}`,
        primary3: `4rem -4rem 0 -1px ${dark1},4rem -4rem 0 1px ${primary3}`,
      },
      colors: {
        "dark-1": dark1,
        "primary-1": primary1,
        "primary-2": primary2,
        "primary-3": primary3,
        "primary-light-1": primaryLight1,
        "primary-light-2": primaryLight2,
        "primary-light-3": primaryLight3,

        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      dropShadow: {
        accent: "0 0 0.6rem #222",
        "border-1px": `0 0 1px ${dark1}`,
      },
      fontFamily: {
        title: ["Orbitron", "sans-serif"],
        main: ["Jost", "sans-serif"],
      },
      listStyleType: {
        square: "square",
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
