import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '../../styles/MediaQueries';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-size: 100%;
    background: #fff;
  }
  body {
    margin: 0;
    padding: 0;
    padding-top: 50px;
    ${mediaMin.tabletLandscape`
      padding-top: 60px;
    `}
    #__next{
      height: 100%;
    }
  }
`;

export default GlobalStyles;
