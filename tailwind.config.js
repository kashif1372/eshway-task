/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor: {
        'custom-blue': 'rgb(76, 86, 89)',
        'custom-gray': 'rgb(14, 19, 26)',
      },
    },
  },
  plugins: [],
}