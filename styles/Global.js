import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-size: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  #__next {
    height: 100%;
  }
  .container {
    margin-top: 60px;
  }
`;

export default GlobalStyles;
