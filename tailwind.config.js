/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f7ccb9",
        
"secondary": "#4963f4",
        
"accent": "#bfdb32",
        
"neutral": "#22252F",
        
"base-100": "#EFEEF6",
        
"info": "#8DABF6",
        
"success": "#4CE1D2",
        
"warning": "#F7A62B",
        
"error": "#E41B43",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

