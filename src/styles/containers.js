import { css } from '@emotion/core';
import { mediaMin } from '~/styles/MediaQueries';
const containers = css`
  .container {
    width: 95%;
    min-height: 100vh;
    margin: 84px auto 0 auto;
    ${mediaMin('tabletLandscape')} {
      margin: 100px auto 0 auto;
    }
  }

  .ReactModal__Overlay {
    z-index: 101;
  }
`;

export default containers;
