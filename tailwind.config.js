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
      backgroundImage: {
        rightMobilePattern: "url('./images/bg-pattern-intro-right-mobile.svg)",
        leftMobilePattern: "url('./images/bg-pattern-intro-left-mobile.svg)",
        aboutMobilePattern: "url('./images/bg-pattern-how-we-work-mobile.svg)",
        footerMobilePattern: "url('./images/bg-pattern-footer-mobile.svg)",
        rightDesktopPattern: "url('./images/bg-pattern-intro-right-desktop.svg)",
        leftDesktopPattern: "url('./images/bg-pattern-intro-left-desktop.svg)",
        aboutDesktopPattern: "url('./images/bg-pattern-how-we-work-desktop.svg)",
        footerDesktopPattern: "url('./images/bg-pattern-footer-desktop.svg)",

      }
    }
  },
  plugins: [],
}
