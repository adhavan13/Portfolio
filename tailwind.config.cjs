/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      colors: {
        primary: "#1E3A8A", // Deep blue
        secondary: "#F59E0B", // Warm yellow
        accent: "#10B981", // Bright green
      },
    },
  },
  plugins: [],
};
