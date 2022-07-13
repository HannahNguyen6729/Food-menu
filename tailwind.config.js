/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/DemoTailwind/GridComp.jsx",
    // "./src/DemoTailwind/Flex.jsx",
    // "./src/DemoTailwind/Responsive.jsx",
    // "./src/DemoTailwind/BTTailwind.jsx",
    "./src/DemoTailwind/FoodMenu.jsx",
    "./src/DemoTailwind/Popup.jsx",
  ],
  theme: {
    extend: {},
    container:{
      // center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
  },

  plugins: [],
}
