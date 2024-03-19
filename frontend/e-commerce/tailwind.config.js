/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ambre: {
          50: "#FCDED9",
          100: "#FABFB0",
          200: "#AF6655",
          300: "#AB593F",
          400: "#A44C29",
          500: "#9E3F13",
          600: "#6C2F0F",
          700: "#4F250C",
          800: "#321A08",
          900: "#160D04",
        },
        sable: {
          50: "#FFF3EE",
          100: "#FFE6D9",
          200: "#FFE6D9",
          300: "#FFD4C2",
          400: "#FFC0A8",
          500: "#FFAE8F",
          600: "#FF9B77",
          700: "#FF875E",
          800: "#FF7446",
          900: "#FF602D",
        },
        ocean: {
          50: "#E6EDF3",
          100: "#C0D1E1",
          200: "#005B91",
          300: "#005183",
          400: "#004475",
          500: "#003667",
          600: "#002959",
          700: "#001D4B",
          800: "#00113D",
          900: "#00052F",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "cupcake", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
