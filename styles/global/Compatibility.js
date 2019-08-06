import { createGlobalStyle } from 'styled-components';
// import { mediaMin } from '../../styles/MediaQueries';

// IE Style Fixes

const CompatibilityStyles = createGlobalStyle`
  .react-reveal {
    min-height: 1px;
  }
`;

export default CompatibilityStyles;
