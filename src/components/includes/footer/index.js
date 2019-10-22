import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 2em 4em;
  box-sizing: border-box;
  color: #fff;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 3em;
    margin: 0;
  }
  p {
    display: flex;
    flex-direction: column;
    margin: 0 0 1em 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <h2>Visit ROW DTLA</h2>
        <p>
          <span>777 S ALAMEDA ST</span>
          <span>LOS ANGELES CA 90021</span>
        </p>
        <p>
          <span>MONDAY TO SUNDAY 8AM - 10PM</span>
        </p>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
