module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand:{
          500: "#8257e6",
          400: "#996dff",



        }
      }
    },
    borderRadius:{
      md: '4px'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
