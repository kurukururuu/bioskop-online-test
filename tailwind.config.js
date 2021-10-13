const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-1': '#011228',
        'blue-2': '#011C3C',
        'blue-3': '#011E41',
        'blue-4': '#9BC7FD',
        'blue-border': '#023779',
        'yellow-primary': '#FFD700',
        'red-primary': '#FF0000',
        'red-secondary': '#EB5757',
      },
      fontSize: {
        xxs: '10px',
        '2xxs': '8px',
        'button': ['16px', { fontWeight: 600 }],
        'button-small': ['14px', { fontWeight: 600 }],
      },
      width: {
        'fit-content': 'fit-content'
      },
      cursor: {
        grab: 'grab'
      },
      screens: {
        mobile: { max: '767px' },
        desktop: { min: '768px' },
        xs: { max: '374px' },
        sm: { min: '375px', max: '767px' },
        md: { min: '768px', max: '1024px' },
        lg: { min: '1025px', max: '1439px' },
        xl: { min: '1440px' }
      },
    },
    // container: {
    //   screens: {
    //      sm: "100%",
    //      md: "100%",
    //      lg: "95px",
    //      xl: "90px"
    //   }
    // }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.base') },
        'p': { fontSize: theme('fontSize.sm') },
      })
    }),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '95%',
          },
          '@screen xl': {
            maxWidth: '90%',
          },
        }
      })
    }
  ],
}
