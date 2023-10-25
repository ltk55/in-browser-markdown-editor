/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      neutral: {
        1000: "rgb(21, 22, 25)",
        900: "rgb(29, 31, 34)",
        800: "rgb(43, 45, 49)",
        700: "rgb(53, 57, 63)",
        600: "rgb(90, 96, 105)",
        500: "rgb(124, 129, 135)",
        400: "rgb(193, 196, 203)",
        300: "rgb(228, 228, 228)",
        200: "rgb(245, 245, 245)",
        100: "rgb(255, 255, 255)",
      },
      orange: "rgb(228, 102, 67)",
      orangeHover: "rgb(243, 151, 101)",
      transparent: "rgba(0, 0, 0, 0)",
      overlayTransparent: "rgb(21, 22, 25, 0.5)",
      lightOverlayTransparent: "rgba(124, 129, 135, 0.5)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
