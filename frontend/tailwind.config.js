/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    extend: {
      fontFamily:{
        custom :[ "Dancing Script", "cursive"],
      },
      
  
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

