// configure Storybook's webpack to mimic create-react-app/craco

const path = require('path');
const craco = require('../.craco/config.js');
const traverse = require('../.craco/utils').traverse;

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (webpackConfig, { configType }) => {
    // configType is 'DEVELOPMENT' or 'PRODUCTION'
    const isDev = configType === 'DEVELOPMENT' ? true : false;

    traverse(webpackConfig, (obj, key) => {
      if (key === 'loader') {
        if (obj[key].includes('/css-loader/')) {
          obj.options = {
            ...obj.options,
            sourceMap: isDev,
          };
        }
        if (obj[key].includes('/postcss-loader/')) {
          obj.options = {
            ...obj.options,
            sourceMap: isDev,
          };
        }
        if (obj[key].includes('/sass-loader/')) {
          obj.options = {
            ...obj.options,
            ...craco.style.sass.loaderOptions,
            sourceMap: isDev,
          };
        }
      }
    });

    // console.dir(webpackConfig, { depth: null });
    return webpackConfig;
  },
};
