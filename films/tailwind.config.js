/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        whiteText: 'var(--white-text-color)',
        timeLine: 'var(--time-line-color)',
        twoMain: 'var(--two-main-color)',
        buttonBg: 'var(--button-bg-color)',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

