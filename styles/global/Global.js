import { createGlobalStyle } from 'styled-components';

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
    padding-top: 60px;
    @media screen and (max-width: 1024px){
      padding-top: 50px;
    }
  }
  #__next {
    height: 100%;
  }
`;

export default GlobalStyles;
