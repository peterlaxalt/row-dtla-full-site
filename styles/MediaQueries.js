import { css } from 'styled-components';

const sizes = {
  phone: 992,
  phoneLarge: 768,
  tablet: 576,
  tabletLandscape: 992,
  desktopSmall: 1200,
  desktop: 1440,
  desktopLarge: 1920,
  desktopXLarge: 2048
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;