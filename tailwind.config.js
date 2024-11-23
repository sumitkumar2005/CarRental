/** @type {import('tailwindcss').Config} */
export default {
  // tailwind.config.js


  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom': '15rem', // Use h-custom for this height
      },
      width:{
        'custom':'50rem'
      }
    },
  },
  plugins: [],
}