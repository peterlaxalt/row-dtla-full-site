import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
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

      div[role='group'][tabindex] {
        height: 100%;
      }
    `}
  />
);

export default GlobalStyles;
