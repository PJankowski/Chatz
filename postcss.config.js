module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: {
            text: '#ebebff',
            backgroundColor: '#282b34',
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
