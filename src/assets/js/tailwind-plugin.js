const plugin = require('tailwindcss/plugin')

const components = plugin(function ({ addComponents }) {
  const newComponents = {
    '.font-primary': {
      fontFamily: 'Mukta, sans-serif',
    },
    '.label': {
      fontSize: '0.76rem',
      fontWeight: '700',
      lineHeight: '0.72rem',
    },
    '.label-sm': {
      fontSize: '0.64rem',
      fontWeight: '700',
      lineHeight: '0.60rem',
    },
    '.label-lg': {
      fontSize: '0.84rem',
      fontWeight: '700',
      lineHeight: '0.80rem',
    },
    '.link': {
      fontWeight: '400',
      color: '#01cb63',
    },
    '.link-sm': {
      fontSize: '0.94rem',
      fontWeight: '500',
    },
  }
  addComponents(newComponents)
})

module.exports = components
