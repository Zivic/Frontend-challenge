/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        'sidebar-gradient-start': '#1B3351',
        'sidebar-gradient-end': '#240621',
        'card-gradient-end': '#120718',
      }
    },
  },
  plugins: [],
}

