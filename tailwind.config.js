/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display : ["group-hover"],
      backgroundImage: {
        'home-bg': "url('./src/assets/images/png/background.png')",
        'arrow-bg': "url('./src/assets/images/png/arrowbg.png')",
      }
    },
  },
  plugins: [],
}

