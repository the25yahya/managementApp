/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: '#D7D9D9',
        customYellow: '#FFD700',
      },
    },
  },
  plugins: [],
}
