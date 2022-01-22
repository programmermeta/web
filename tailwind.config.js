module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'CocoSharp',
        logo: 'Monofur'
      },
      colors: {
        primary: '#A1B6FF',
        accent: '#2444B6'
      }
    },
  },
  plugins: [],
}
