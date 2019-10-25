import { css } from '@emotion/core';
import { mediaMin } from '~/styles/MediaQueries';
const containers = css`
  .container {
    min-height: 100vh;
    margin: 84px 14px 0 14px;
    ${mediaMin('tabletLandscape')} {
      margin: 100px 4em 0 4em;
    }
  }

  .ReactModal__Overlay {
    z-index: 101;
  }
`;

export default containers;
