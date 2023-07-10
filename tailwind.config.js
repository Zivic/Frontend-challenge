/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        'sidebar-gradient-start': '#313a5b',
        'sidebar-gradient-end': '#242247'
      }
    },
  },
  plugins: [],
}

