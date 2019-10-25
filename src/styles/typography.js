import { css } from '@emotion/core';

const typography = css`
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'SangBleu Kingdom';
    font-style: normal;
    font-weight: 500;
  }

  span,
  div,
  p {
    font-family: 'Apercu';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  a:hover: {
    color: inherit;
  }

  a:active {
    color: inherit;
  }
`;

export default typography;
