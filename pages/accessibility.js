import styled from 'styled-components';

import { mediaMin } from '~/styles/MediaQueries';
import ScrollUp from '~/components/ScrollUp';
import CopyrightFooter from '~/components/CopyrightFooter';

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  min-height: 100%;
  padding: 0 15px;
  ${mediaMin.tabletLandscape`
    padding: 0 40px;
  `}
  h2 {
    letter-spacing: 1px;
    font-family: 'Berthold Akzindenz Grotesk';
    font-weight: 600;
    ${mediaMin.tabletLandscape`
      font-size: 32px;
      line-height: 44px;
      `}
  }
  p {
    margin-bottom: auto;
    font-size: 14px;
    line-height: 22px;
    ${mediaMin.tabletLandscape`
        font-size: 19px;
        line-height: 28.5px;
    `}
  }
`;

const Accessibility = () => {
  return (
    <AccessibilityContainer>
      <h2>ACCESSIBILITY STATEMENT</h2>
      <p>
        Hudson Square Properties is committed to providing a website that is accessible to the widest possible audience,
        regardless of technology or ability. We aim to comply with all applicable standards. If you experience any
        difficulty in accessing any part of this website, please contact us by calling us at (212) 230-2300.
      </p>
      <ScrollUp />
      <CopyrightFooter />
    </AccessibilityContainer>
  );
};

export default Accessibility;
