import { css } from '@emotion/core';
// const TestDiv = styled.div`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   ${minWidth('phone')} {
//     font-size: 240px;
//   },
// `;

const breakpoints = {
  phone: 375,
  phoneLarge: 414,
  phoneXL: 550,
  tablet: 768,
  tabletLandscape: 1050,
  desktopSmall: 1250,
  desktop: 1440,
  desktopLarge: 1920,
  desktopXLarge: 2048,
};

const mediaMax = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const mediaMin = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export { mediaMax, mediaMin };
