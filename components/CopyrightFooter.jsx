import styled from 'styled-components';

const CopyrightFooterContainer = styled.div`
  font-size: 12px;
  line-height: 22px;
  font-weight: lighter;
  padding: 10px 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const CopyrightFooter = () => {
  return (
    <CopyrightFooterContainer>
      Copyright © 2019. No part of this website (eg. pictures, graphs, logos and
      others designing material) may be copied, disseminated or published for
      commercial or advertising use without the prior written permission from
      Hudson Square Properties.
    </CopyrightFooterContainer>
  );
};

export default CopyrightFooter;
