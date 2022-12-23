/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
    },
    extend: {
      colors: {
        bgColor: "#1B244A",
        timerOrange: "#F94F6D",
        timerGray: "#9AABD8"
      },

      fontFamily: {
        cursedTimer: "'Cursed Timer ULiL', sans-serif;",
        verdana: "'Verdana', sans-serif;"
      },
    },
  },
  plugins: [],
}
