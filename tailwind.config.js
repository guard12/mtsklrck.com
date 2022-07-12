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
      },
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
            '0%, 100%': {
              'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
              'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
      }
    }
  },
}
