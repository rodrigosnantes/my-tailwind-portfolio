/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-background': '#1C2128',
      'dark-background-card': '#22272E',
      'dark-font-light': '#AEBAC7',
      'dark-font-night': '#76828F',
      'dark-border': '#444C56',
      'dark-pink': '#ff77e9',
      'white': '#fff',
    },
  },
  plugins: [],
}