/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#3581B8',
        'main-orange': '#FFB684',
        'light-green': '#F7FFFB',
      },
    },
  },
  plugins: [],
}

