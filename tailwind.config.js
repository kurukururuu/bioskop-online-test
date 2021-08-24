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
      },
      fontSize: {
        'button': ['16px', { fontWeight: 600 }],
        'button-small': ['14px', { fontWeight: 600 }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.base') },
        'p': { fontSize: theme('fontSize.sm') },
      })
    })
  ],
}
