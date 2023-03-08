/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        lightPurple:'#737BAE',
        highGreen:'#00FFA3',
        dangerRed:'#FF4D4D',
        lightGray:'#5A5F7D',
        darkBlue:'#14172B',
        bitcoinBg:'#EAB300',
        etheriumBg:'#EDF0F4',
        binanceBg:'#F3BA2F',
        shibaBg:'#E42D04'

      }

    },
  },
  plugins: [],
}
