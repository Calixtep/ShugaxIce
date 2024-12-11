/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        auburn: "rgba(150, 50, 25, 1)",
        dustyGreen: "rgb(12, 26, 20)"
      },
      sandwich: "underline"
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

