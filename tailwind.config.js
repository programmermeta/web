module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'CocoSharp',
        logo: 'Monofur'
      },
      colors: {
        primary: '#A1B6FF',
        accent: '#2444B6',
        dark: '#1F3144'
      }
    },
  },
  plugins: [],
}
