const withCSS = require('@zeit/next-css');
module.exports = withCSS();

const withFonts = require('next-fonts');
module.exports = withFonts();

const webpackConfig = {
  node: { fs: 'empty' } // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
};

module.exports = webpackConfig; // Export all custom Webpack configs.
