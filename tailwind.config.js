/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/models/**/*.ts',
    './app/data/**/*.ts',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C09937',
          light: '#E8C869',
          mid: '#D4B556',
          dark: '#A07A2E',
        },
        dark: '#181818',
      },
      boxShadow: {
        big: '0px 1px 10px 0px rgba(0, 0, 0, 0.30)',
        medium: '0px 1px 7px 0px rgba(0, 0, 0, 0.20)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  plugins: [],
}
