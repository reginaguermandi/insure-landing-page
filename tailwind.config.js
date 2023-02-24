/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#2d2640',
        'grayish-blue': '#95a9c6',
        'very-dark-violet': '#2b272f',
        'dark-grayish-violet': '#837d87',
        'very-light-gray': '#fafafa',
      },
      fontFamily: {
        headings: ['DM Serif Display', 'sans-serif'],
        body: ['Karla', 'serif'],
      },
    },
  },
  plugins: [],
}
