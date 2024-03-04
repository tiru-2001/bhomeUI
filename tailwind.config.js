/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPruple: "#4a0562",
        customBlue: {
          100: "#132a45",
          200: "#143c6b",
        },
      },
    },
  },
  plugins: [],
};
