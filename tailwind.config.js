/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'dark-bg':'#121212',
        'dark-text':'#f5f5f5',
      },
    },
  },
  plugins: [],
}
