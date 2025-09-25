/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Dynamic gradients and dots used in Services
    { pattern: /(from|via|to)-(blue|emerald|rose|amber|slate|violet)-(400|500|600|700)/ },
    { pattern: /bg-(blue|emerald|rose|amber|slate|violet)-400/ },
  ],
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
      },
      boxShadow: {
        'glow': '0 10px 30px -10px rgba(34,197,94,0.35), 0 4px 12px -6px rgba(22,101,52,0.25)'
      },
      backgroundImage: {
        'healthcare-radial': 'radial-gradient( circle at 20% 20%, rgba(34,197,94,0.10), transparent 40% ), radial-gradient( circle at 80% 0%, rgba(132,204,22,0.10), transparent 40% )'
      }
    },
  },
  plugins: [],
}

