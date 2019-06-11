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
    font-family: 'Berthold Akzindenz Grotesk';
    @media screen and (max-width: 1024px){
      overflow-x: hidden;
    }
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

  .container {
    height: 100%;
    width: 100%;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFBol.otf') format("opentype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }
  
  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFBolCn.otf') format("opentype");
    font-weight: 600;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFBolCnIt.otf') format("opentype");
    font-weight: 600;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFBolEx.otf') format("opentype");
    font-weight: 600;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFBolExIt.otf') format("opentype");
    font-weight: 600;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFBolIt.otf') format("opentype");
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFCn.otf') format("opentype");
    font-weight: 400;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFCnIt.otf') format("opentype");
    font-weight: 400;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFEx.otf') format("opentype");
    font-weight: 400;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFExIt.otf') format("opentype");
    font-weight: 400;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFLig.otf') format("opentype");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFLigCn.otf') format("opentype");
    font-weight: 300;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFLigCnIt.otf') format("opentype");
    font-weight: 300;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFLigEx.otf') format("opentype");
    font-weight: 300;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFLigExIt.otf') format("opentype");
    font-weight: 300;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFLigIt.otf') format("opentype");
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFMd.otf') format("opentype");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFMdCn.otf') format("opentype");
    font-weight: 500;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFMdCnIt.otf') format("opentype");
    font-weight: 500;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFMdEx.otf') format("opentype");
    font-weight: 500;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFMdExIt.otf') format("opentype");
    font-weight: 500;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFMdIt.otf') format("opentype");
    font-weight: 500;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFReg.otf') format("opentype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFSup.otf') format("opentype");
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFSupIta.otf') format("opentype");
    font-weight: 800;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFXBd.otf') format("opentype");
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFXBdCn.otf') format("opentype");
    font-weight: 700;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFXBdCnIt.otf') format("opentype");
    font-weight: 700;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url('/static/fonts/AkzidGroCFFXBdIt.otf') format("opentype");
    font-weight: 700;
    font-style: italic;
    font-stretch: normal;
  }
`;

export default GlobalStyles;
