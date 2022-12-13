/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Poppins"]
    },
    extend: {
      keyframes: {
        progress: {
          '0%': { left: "-50%" },
          '100%': { left: "100%" }
        }
      },
      animation: {
        progress: "progress 1s linear infinite",
      }
    },
  },
  plugins: [],
}
