/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Healthcare-themed palette (green-led)
        "healthcare": {
          primary: "#166534", // green-700 for primary brand
          secondary: "#22C55E", // green-500 for highlights
          accent: "#84CC16", // lime-500 accents
          bg: "#F6FEF9", // subtle green-50 background
          surface: "#FFFFFF", // surfaces/cards
          text: "#052E16", // deep green-950
          muted: "#4D7C57" // desaturated green for muted text
        }
      }
    },
  },
  plugins: [],
}

