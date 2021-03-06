module.exports = {
  purge: ['./public/**/*.html'],
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      colors: {
        fondo: {
          50: '#FFFFFF',
          100: '#FEFEFE',
          200: '#FDFDFD',
          300: '#FBFBFB',
          400: '#F9F8F8',
          500: '#F6F5F5',
          600: '#DDDDDD',
          700: '#949393',
          800: '#6F6E6E',
          900: '#4A4A4A',
        },
        naranja: {
          50: '#FEF8F7',
          100: '#FDF1EE',
          200: '#FBDBD5',
          300: '#F8C5BC',
          400: '#F39A89',
          500: '#EE6F57',
          600: '#D6644E',
          700: '#8F4334',
          800: '#6B3227',
          900: '#47211A',
        },
        azul: {
          50: '#F3F6F8',
          100: '#E8EEF1',
          200: '#C4D4DC',
          300: '#A1BAC7',
          400: '#5B879E',
          500: '#145374',
          600: '#124B68',
          700: '#0C3246',
          800: '#092534',
          900: '#061923',
        },
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
    },
  },
  variants: { backgroundColor: ['responsive', 'hover', 'focus'], borderColor: ['focus', 'hover'] },
  plugins: [],
};
