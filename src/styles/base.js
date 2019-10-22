import { css } from '@emotion/core';

const base = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
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

  div[role='group'][tabindex] {
    height: 100%;
  }
`;

export default base;
