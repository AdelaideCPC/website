import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      colors: {
        primary: "#57cc99",
        secondary: "#c7f9cc",
        neutral: "#aab9cf",
        base: "#c1d4e3",
      },
      fontFamily: {
        sans: ["Atkinson Hyperlegible Next", "ui-sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
