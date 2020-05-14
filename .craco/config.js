const path = require('path');
const sassSourcemapsPlugin = require('./craco-plugin-sass-sourcemaps');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        prependData: '@import "./base.scss";',
        sassOptions: {
          includePaths: [path.resolve(__dirname, '../src/assets/styles')],
        },
      },
    },
  },
  plugins: [{ plugin: sassSourcemapsPlugin }],
};
