/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'responsive': ['base', { sm: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }]
      },
    },
  },
  plugins: [],
}

