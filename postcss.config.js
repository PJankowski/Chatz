module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: {
            text: '#ebebff',
            backgroundColor: '#282b34',
            outsideColor: '#23272e',
            orange: '#dd672c',
            red: '#e26b73',
            green: '#6ac38a',
            yellow: '#e6c176',
          },
        },
      },
    }),
  ],
};
