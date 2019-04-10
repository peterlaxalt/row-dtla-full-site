const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  webpack(config) {
    return config;
  }
});

const withFonts = require('next-fonts');
module.exports = withFonts();
