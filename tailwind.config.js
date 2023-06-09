/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display : ["group-hover"],
      fontFamily : {
        'gen' : ["Space Grotesk", "sans-serif"]
      },
      backgroundImage: {
        'home-bg': "url('../src/assets/images/png/background.png')",
        'arrow-bg': "url('../src/assets/images/png/arrowbg.png')",
        'traction-bg': "url('../src/assets/images/png/traction.png')",
        'over-bg': "url('../src/assets/images/png/over.png')",

      }
    },
  },
  plugins: [],
}

