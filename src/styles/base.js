import { css } from '@emotion/core';
import { mediaMin } from '~/styles/mediaQueries';

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

  textarea,
  input {
    outline: none;
  }

  div[role='group'][tabindex] {
    height: 100%;
  }

  .modal {
    position: relative;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(0, 0, 0);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    color: rgb(255, 255, 255);
    z-index: 101;
    ${mediaMin('tabletLandscape')} {
      padding: 20px;
      width: 50%;
    }
  }
`;

export default base;
