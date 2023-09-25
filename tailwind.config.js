/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1140px',
      },
      spacing: {
        'w725': '725px',
        'w806': '806px',
        'w412': '412px',
        'w390': '390px',
      },
      colors: {
        'primary': '#D3EBFF',
        'secondary': '#315AE7',
        'third': '#E7F5FF',
        'four': '#FAFDFF',
        'five': '#333333',
      },
      fontSize:{
        text28:"28px",
        text50:"50px",
        text45:"45px",
      },
      fontFamily: {
        'robo': ['Roboto Slab'],
        'mus': ['MuseoModerno'],
        'pop': ['Poppins'],
      },
      backgroundImage: {
        'banner': "url('src/assets/banner.png')",
      }
      
    },
  },
  plugins: [],
}

