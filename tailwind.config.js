const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          'theme': '#6A5D7B',
          'light': '#EFEBF2'
        }
      }
    },
    borderRadius: {
      'sm': '0.125rem',
      default: '0.25rem',
      'md': '0.375rem',
      'lg': '12px',
      'full': '9999px',
    },
  },
  variants: {},
  plugins: [],
};
