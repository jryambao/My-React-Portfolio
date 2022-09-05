module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xm': '{max-width:"639px"}',
      'sm': '575px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1436px',
      // => @media (min-width: 1536px) { ... }
    },
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








