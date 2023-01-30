/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
    extend: {
      backgroundImage: {
        'right-mobile-pattern': "url('./images/bg-pattern-intro-right-mobile.svg)",
        'left-mobile-pattern': "url('./images/bg-pattern-intro-left-mobile.svg)",
        'about-mobile-pattern': "url('./images/bg-pattern-how-we-work-mobile.svg)",
        'footer-mobile-pattern': "url('./images/bg-pattern-footer-mobile.svg)",
        'right-desktop-pattern': "url('./images/bg-pattern-intro-right-desktop.svg)",
        'left-desktop-pattern': "url('./images/bg-pattern-intro-left-desktop.svg)",
        'about-desktop-pattern': "url('./images/bg-pattern-how-we-work-desktop.svg)",
        'footer-desktop-pattern': "url('./images/bg-pattern-footer-desktop.svg)"
      }
    },
  },
  plugins: [],
}
