module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      // }),
    },
    // backgroundColor: (theme) => ({
    //   ...theme("colors"),
    //   primary: "",
    //   primaryHover: "",
    //   secondary: "",
    //   "light-gray": "#c0c0c0",
    // }),
    // borderColor: (theme) => ({
    //   ...theme("colors"),
    //   primary: "",
    //   primaryHover: "",
    //   secondary: "",
    //   "light-gray": "#c0c0c0",
    // }),
    // textColor: (theme) => ({
    //   ...theme("colors"),
    //   primary: "",
    //   primaryHover: "",
    //   secondary: "",
    //   "light-gray": "#c0c0c0",
    // }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
