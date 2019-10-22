import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        background-color: grey;
      }
    `}
  />
);

export default GlobalStyles;
