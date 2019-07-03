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
    src: url("/static/fonts/AkzidGroCFFBol.eot"); 
    src: url("/static/fonts/AkzidGroCFFBol.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFBol.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFBol.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFBol.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFBol.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBol.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }
  
  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFBolCn.eot"); 
    src: url("/static/fonts/AkzidGroCFFBolCn.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFBolCn.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFBolCn.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFBolCn.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFBolCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolCn.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFBolCnIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFBolCnIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFBolCnIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFBolCnIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFBolCnIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFBolCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolCnIt.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFBolEx.eot"); 
    src: url("/static/fonts/AkzidGroCFFBolEx.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFBolEx.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFBolEx.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFBolEx.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFBolEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolEx.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFBolExIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFBolExIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFBolExIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFBolExIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFBolExIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFBolExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolExIt.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFBolIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFBolIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFBolIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFBolIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFBolIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFBolIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFBolIt.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFCn.eot"); 
    src: url("/static/fonts/AkzidGroCFFCn.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFCn.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFCn.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFCn.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFCn.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFCnIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFCnIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFCnIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFCnIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFCnIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFCnIt.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFEx.eot"); 
    src: url("/static/fonts/AkzidGroCFFEx.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFEx.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFEx.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFEx.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFEx.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFExIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFExIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFExIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFExIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFExIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFExIt.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFLig.eot"); 
    src: url("/static/fonts/AkzidGroCFFLig.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFLig.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFLig.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFLig.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFLig.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLig.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFLigCn.eot"); 
    src: url("/static/fonts/AkzidGroCFFLigCn.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFLigCn.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFLigCn.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFLigCn.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFLigCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigCn.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFLigCnIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFLigCnIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFLigCnIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFLigCnIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFLigCnIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFLigCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigCnIt.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFLigEx.eot"); 
    src: url("/static/fonts/AkzidGroCFFLigEx.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFLigEx.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFLigEx.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFLigEx.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFLigEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigEx.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFLigExIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFLigExIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFLigExIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFLigExIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFLigExIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFLigExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigExIt.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFLigIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFLigIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFLigIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFLigIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFLigIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFLigIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFLigIt.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFMd.eot"); 
    src: url("/static/fonts/AkzidGroCFFMd.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFMd.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFMd.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFMd.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFMd.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMd.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFMdCn.eot"); 
    src: url("/static/fonts/AkzidGroCFFMdCn.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFMdCn.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFMdCn.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFMdCn.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFMdCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdCn.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFMdCnIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFMdCnIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFMdCnIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFMdCnIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFMdCnIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFMdCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdCnIt.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFMdEx.eot"); 
    src: url("/static/fonts/AkzidGroCFFMdEx.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFMdEx.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFMdEx.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFMdEx.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFMdEx.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdEx.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFMdExIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFMdExIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFMdExIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFMdExIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFMdExIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFMdExIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdExIt.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
    font-stretch: expanded;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFMdIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFMdIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFMdIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFMdIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFMdIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFMdIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFMdIt.woff2") format("woff2");
    font-weight: 500;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFReg.eot"); 
    src: url("/static/fonts/AkzidGroCFFReg.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFReg.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFReg.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFReg.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFReg.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFReg.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFSup.eot"); 
    src: url("/static/fonts/AkzidGroCFFSup.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFSup.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFSup.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFSup.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFSup.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFSup.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFSupIta.eot"); 
    src: url("/static/fonts/AkzidGroCFFSupIta.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFSupIta.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFSupIta.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFSupIta.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFSupIta.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFSupIta.woff2") format("woff2");
    font-weight: 800;
    font-style: italic;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFXBd.eot"); 
    src: url("/static/fonts/AkzidGroCFFXBd.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFXBd.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFXBd.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFXBd.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFXBd.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBd.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFXBdCn.eot"); 
    src: url("/static/fonts/AkzidGroCFFXBdCn.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFXBdCn.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFXBdCn.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFXBdCn.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFXBdCn.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBdCn.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFXBdCnIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFXBdCnIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFXBdCnIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFXBdCnIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFXBdCnIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFXBdCnIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBdCnIt.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-stretch: condensed;
  }

  @font-face{
    font-family: 'Berthold Akzindenz Grotesk';
    src: url("/static/fonts/AkzidGroCFFXBdIt.eot"); 
    src: url("/static/fonts/AkzidGroCFFXBdIt.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/AkzidGroCFFXBdIt.otf") format("opentype"), 
      url("/static/fonts/AkzidGroCFFXBdIt.svg") format("svg"),
      url("/static/fonts/AkzidGroCFFXBdIt.ttf") format("truetype"),
      url("/static/fonts/AkzidGroCFFXBdIt.woff") format("woff"), 
      url("/static/fonts/AkzidGroCFFXBdIt.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-stretch: normal;
  }
`;

export default GlobalStyles;
