/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '2.25rem', // Custom size for h1
        'h2': '1.875rem', // Custom size for h2
        'h3': '1.5rem', // Custom size for h3
        'h4': '1.25rem', // Custom size for h4
        'h5': '1rem', // Custom size for h5
        'h6': '0.875rem', // Custom size for h6
      },
    },
  },
  plugins: [],
}

