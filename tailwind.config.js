/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '567px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

      fontFamily:{
        sora :["Sora"],
        num : ["Monoton"],
      },

      
      
     
      screens: {
        'xs': {'min':'300px','max':'566px'},
        // => @media (min-width: 992px) { ... }
      },

      colors: {
        "color-primary": "#231e41",
        "color-secondary": "#f5c332",
        "color-sub-heading":"#7b7b91",
        "color-territory":"#f2f3f5",
        
      }
    },
  },
  plugins: [],
}