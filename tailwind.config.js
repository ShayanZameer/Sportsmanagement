



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
      screens: {
        xm: "350px",
        xmm: "430px",
        sm: "576px",
        smm: "673px",
        mdd: "653px",
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
