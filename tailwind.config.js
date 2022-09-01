module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'animation': {
            'text':'text 4s ease infinite',
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
    },
    fontFamily: {
      signature: ["Great Vibes"],
      header: ["Montserrat"],
      nav: ["Catamaran"]
    },
  },
  
  plugins: [],
};







