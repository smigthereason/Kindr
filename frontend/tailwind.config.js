/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",],
  theme: {
    extend: {
      colors: {
        accent: "#FF6633",
        secondary:"#29221D",
      },
    },
  },
  plugins: [],
}

