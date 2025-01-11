/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
          primary: "#00bcd4", // Cyan
          accent: "#ffeb3b",  // Jaune
          dark: "#1a202c",
          light: "#f7fafc",
              },
            },
          },
  plugins: [],
}

