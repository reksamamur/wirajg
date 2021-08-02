module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      
      fontFamily: {
        main: ['Poppins']
      },
      colors: {
        primary: '#404040',
        std: 'CFCFCF',
        hover: 'E8E8E8',
      },
      spacing: {
        104: '26 rem',
        112: '28 rem',
      },
      screens: {
        'xs' : '375px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
