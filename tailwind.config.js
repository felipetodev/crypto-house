module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'linear-gradient(0deg,#fff 20%,hsla(0,0%,100%,0) 80%)'
      }
    }
  },
  plugins: []
}
