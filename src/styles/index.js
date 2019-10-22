import { Global } from '@emotion/core';

import base from './base';
import containers from './containers';
import fonts from './fonts';

const GlobalStyles = () => <Global styles={[base, containers, fonts]} />;

export default GlobalStyles;
