/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': "#000000",
      'white': "#ffffff",
      'white-dark': "#95AEBA",
      'blue': "blue",
      'blue-dark': "#293268",
      // rgba(41, 50, 104, 0.5)
    },
    extend: {
      colors: {
        "primary": "#FF533F",
        "primary-dark": "#CF3A3A",
      },
    },
  },
  plugins: [require("daisyui")],
}