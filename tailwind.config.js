module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'border-color': '#333',
        'custom-gradient': 'linear-gradient(#ec6192 4.44%,#ec4c34 21.45%,#ffbd2b 37.21%,#ebde56 54.63%,#57c754 70.8%,#53a1eb 84.07%) 0 100% transparent no-repeat',
      },
    }
  },
}
