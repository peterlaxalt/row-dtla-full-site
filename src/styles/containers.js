import { css } from '@emotion/core';
import { mediaMin } from '~/styles/mediaQueries';

const containers = css`
  .container {
    min-height: 100%;
    margin: 84px auto 0;
    ${mediaMin('tabletLandscape')} {
      margin: 100px 2.5% 0;
    }
  }

  .ReactModal__Overlay {
    z-index: 101;
  }
`;

export default containers;
