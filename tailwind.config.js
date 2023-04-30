/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        listed:"#F5F5F5",
        button:"#858585"
      }
    },    
  },  
  plugins: [],
}

