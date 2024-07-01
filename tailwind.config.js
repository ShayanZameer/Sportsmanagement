// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



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
      

     
    },
  },
  plugins: [
    
  ],
}
