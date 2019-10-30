import { css } from '@emotion/core';

import ApercuLightEOT from '~/fonts/Apercu-Light.eot';
// import ApercuLightOTF from '~/fonts/Apercu-Light.otf';
import ApercuLightTTF from '~/fonts/Apercu-Light.ttf';
import ApercuLightWOFF from '~/fonts/Apercu-Light.woff';
import ApercuLightWOFF2 from '~/fonts/Apercu-Light.woff2';

import ApercuRegularEOT from '~/fonts/Apercu-Regular.eot';
// import ApercuRegularOTF from '~/fonts/Apercu-Regular.otf';
import ApercuRegularTTF from '~/fonts/Apercu-Regular.ttf';
import ApercuRegularWOFF from '~/fonts/Apercu-Regular.woff';
import ApercuRegularWOFF2 from '~/fonts/Apercu-Regular.woff2';

import ApercuMonoEOT from '~/fonts/Apercu-Mono.eot';
// import ApercuMonoOTF from '~/fonts/Apercu-Mono.otf';
import ApercuMonoTTF from '~/fonts/Apercu-Mono.ttf';
import ApercuMonoWOFF from '~/fonts/Apercu-Mono.woff';
import ApercuMonoWOFF2 from '~/fonts/Apercu-Mono.woff2';

import SangBleuKingdomRegularEOT from '~/fonts/SangBleuKingdom-Regular.eot';
// import SangBleuKingdomRegularOTF from '~/fonts/SangBleuKingdom-Regular.otf';
import SangBleuKingdomRegularTTF from '~/fonts/SangBleuKingdom-Regular.ttf';
import SangBleuKingdomRegularWOFF from '~/fonts/SangBleuKingdom-Regular.woff';
import SangBleuKingdomRegularWOFF2 from '~/fonts/SangBleuKingdom-Regular.woff2';

import SangBleuKingdomMediumEOT from '~/fonts/SangBleuKingdom-Medium.eot';
// import SangBleuKingdomMediumOTF from '~/fonts/SangBleuKingdom-Medium.otf';
import SangBleuKingdomMediumTTF from '~/fonts/SangBleuKingdom-Medium.ttf';
import SangBleuKingdomMediumWOFF from '~/fonts/SangBleuKingdom-Medium.woff';
import SangBleuKingdomMediumWOFF2 from '~/fonts/SangBleuKingdom-Medium.woff2';

import SangBleuKingdomMediumItalicEOT from '~/fonts/SangBleuKingdom-MediumItalic.eot';
// import SangBleuKingdomMediumItalicOTF from '~/fonts/SangBleuKingdom-MediumItalic.otf';
import SangBleuKingdomMediumItalicTTF from '~/fonts/SangBleuKingdom-MediumItalic.ttf';
import SangBleuKingdomMediumItalicWOFF from '~/fonts/SangBleuKingdom-MediumItalic.woff';
import SangBleuKingdomMediumItalicWOFF2 from '~/fonts/SangBleuKingdom-MediumItalic.woff2';

import SangBleuKingdomBoldEOT from '~/fonts/SangBleuKingdom-Bold.eot';
// import SangBleuKingdomBoldOTF from '~/fonts/SangBleuKingdom-Bold.otf';
import SangBleuKingdomBoldTTF from '~/fonts/SangBleuKingdom-Bold.ttf';
import SangBleuKingdomBoldWOFF from '~/fonts/SangBleuKingdom-Bold.woff';
import SangBleuKingdomBoldWOFF2 from '~/fonts/SangBleuKingdom-Bold.woff2';

const fonts = css`
  @font-face {
    font-family: 'Apercu';
    src: url(${ApercuLightEOT});
    src: url(${ApercuLightEOT + '?#iefix'}) format('embedded-opentype'), url(${ApercuLightWOFF2}) format('woff2'),
      url(${ApercuLightWOFF}) format('woff'), url(${ApercuLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu';
    src: url(${ApercuRegularEOT});
    src: url(${ApercuRegularEOT + '?#iefix'}) format('embedded-opentype'), url(${ApercuRegularWOFF2}) format('woff2'),
      url(${ApercuRegularWOFF}) format('woff'), url(${ApercuRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Mono';
    src: url(${ApercuMonoEOT});
    src: url(${ApercuMonoEOT + '?#iefix'}) format('embedded-opentype'), url(${ApercuMonoWOFF2}) format('woff2'),
      url(${ApercuMonoWOFF}) format('woff'), url(${ApercuMonoTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SangBleu Kingdom';
    src: url(${SangBleuKingdomRegularEOT});
    src: url(${SangBleuKingdomRegularEOT + '?#iefix'}) format('embedded-opentype'),
      url(${SangBleuKingdomRegularWOFF2}) format('woff2'), url(${SangBleuKingdomRegularWOFF}) format('woff'),
      url(${SangBleuKingdomRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SangBleu Kingdom';
    src: url(${SangBleuKingdomMediumEOT});
    src: url(${SangBleuKingdomMediumEOT + '?#iefix'}) format('embedded-opentype'),
      url(${SangBleuKingdomMediumWOFF2}) format('woff2'), url(${SangBleuKingdomMediumWOFF}) format('woff'),
      url(${SangBleuKingdomMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SangBleu Kingdom';
    src: url(${SangBleuKingdomBoldEOT});
    src: url(${SangBleuKingdomBoldEOT + '?#iefix'}) format('embedded-opentype'),
      url(${SangBleuKingdomBoldWOFF2}) format('woff2'), url(${SangBleuKingdomBoldWOFF}) format('woff'),
      url(${SangBleuKingdomBoldTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'SangBleu Kingdom';
    src: url(${SangBleuKingdomMediumItalicEOT});
    src: url(${SangBleuKingdomMediumItalicEOT + '?#iefix'}) format('embedded-opentype'),
      url(${SangBleuKingdomMediumItalicWOFF2}) format('woff2'), url(${SangBleuKingdomMediumItalicWOFF}) format('woff'),
      url(${SangBleuKingdomMediumItalicTTF}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
`;

export default fonts;
