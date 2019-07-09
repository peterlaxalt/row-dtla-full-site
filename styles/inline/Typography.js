import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: 100%;
    font-family: 'Berthold Akzindenz Grotesk';
  }

  li {
    font-size: 1rem;  
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  a:hover: {
    color: inherit;
  }

  a:active {
    color: inherit;
  }

  .container {
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFBol.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBol.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }
  
  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFBolCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolCn.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFBolCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolCnIt.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFBolEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolEx.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src:
      url("/static/fonts/AkzidGroCFFBolExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolExIt.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFBolIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolIt.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFCn.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFCnIt.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFEx.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFExIt.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFLig.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLig.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFLigCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigCn.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFLigCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigCnIt.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFLigEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigEx.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFLigExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigExIt.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFLigIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigIt.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFMd.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMd.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFMdCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdCn.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFMdCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdCnIt.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFMdEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdEx.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFMdExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdExIt.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFMdIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdIt.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFReg.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFReg.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFSup.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFSup.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFSupIta.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFSupIta.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFXBd.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBd.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFXBdCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBdCn.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFXBdCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBdCnIt.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: 
      url("/static/fonts/AkzidGroCFFXBdIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBdIt.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-stretch: normal;
  }
`;

export default GlobalStyles;
