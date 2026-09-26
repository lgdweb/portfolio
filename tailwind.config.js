module.exports = {
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        header: 'url("../img/background/sectionHeaderBackground.jpg")'
      })
    },
    fontFamily: {
      cursive: ['Courgette', 'cursive'],
      body: ['Nunito', 'sans']
    },
    colors: {
      white: '#fafafa',
      primary: {
        DEFAULT: '#1b1b1b',
        light: '#484848',
        dark: '#333333'
      },
      secondary: {
        DEFAULT: '#ff6d00',
        light: '#ff9e40',
        dark: '#c43c00'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
