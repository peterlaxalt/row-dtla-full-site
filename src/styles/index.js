import { Global } from '@emotion/core';

import base from './base';
import containers from './containers';

const GlobalStyles = () => <Global styles={[base, containers]} />;

export default GlobalStyles;
