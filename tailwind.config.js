/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'invert': 'invert(1)',
        'brightness': 'brightness(1.5)',
      },
    },
  },
  plugins: [],
}

