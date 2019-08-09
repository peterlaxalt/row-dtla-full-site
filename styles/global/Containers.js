import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '../../styles/MediaQueries';

const ContainerStyles = createGlobalStyle`
  height: 100%;
  width: 100%;
  .container {
    padding: 0 15px;
    ${mediaMin.tabletLandscape`
      padding: 0 40px;
    `}
  }
`;

export default ContainerStyles;
