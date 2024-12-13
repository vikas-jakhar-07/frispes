/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playFair': "'Playfair Display', sans-serif",
        'lato': "'Lato', sans-serif",
        'lora': "'Lora', sans-serif",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1150px",
        },
      },
      colors: {
        'deep-blue': "#10375C",
        'deep-gray': "#F8F8F8",
        'off-black': "#222831",
        'off-orange': "#FF5722",
        'off-red': "#DD2C00",
        'off-gray': "#6A6A6A",
        'off-blue': "#0D2C4A",
        'light-gray': "#9A9A9A",
        'medium-gray': "#DFDFDF",
      },
      boxShadow: {
        '3xl': "0px 4px 16px 0px #FF572252",
        '4xl': "0px 0px 0px 2px #10375C, 2px 2px 0px 2px #FFFFFF, 4px 4px 0px 2px #FF5722",
        '5xl': "0px 0px 0px 2px #FFFFFF, 2px 2px 0px 2px #10375C, 4px 4px 0px 2px #FF5722",
        '6xl': "-10px 5px 17px 0px #DFDFDFB2",
        '7xl': "-10px 5px 17px 0px #DD2C003D",
        '8xl': "0px 5px 17px 0px #DFDFDF80",
        '9xl': "0px 4px 16px 0px #FF572252",
        '10xl': "0px 4px 4px 0px #00000040",
        '11xl': "-2px 25px 20px -15px #10375C4D",
      },
      dropShadow: {
        '3xl': "1px 1px 0px #222831",
        '4xl': "1px 1px 0px #FFFFFF",
      },
      fontSize: {
        'custom-xl': "22px",
        'custom-2xl': "26px",
        'custom-3xl': "32px",
        'custom-4xl': "34px",
        'custom-5xl': "52px",
      },
      lineHeight: {
        'custom-xl': "26px",
        'custom-2xl': "30px",
        'custom-3xl': "51.2px",
        'custom-4xl': "56.56px",
        'custom-5xl': "66.56px",
      },
    },
  },
  plugins: [],
}