/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#222831',
          100: "#31363F",
        },
        green: {
          DEFAULT: "#00FFCA"
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}