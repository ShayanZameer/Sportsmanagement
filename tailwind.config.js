



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        dmSans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': ' linear-gradient(105.27deg, #AAC7EC 16.17%, rgba(255, 255, 255, 0) 87.53%)'

      },
      screens: {
        xm: "350px",
        xmm: "430px",
        sm: "576px",
        smm: "673px",
        mdd: "753px",
        md: "837px",
        lg: "992px",
        lgg: "1100px",
        xl: "1201px",
        "2xl": "1401px",
      },



    },
  },
  plugins: [

  ],
}
