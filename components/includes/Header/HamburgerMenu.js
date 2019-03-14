import React from 'react';
import styled from 'styled-components';

const HamburgerDiv = styled.div`
  width: 30px;
  position: relative;
  margin: 0 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const Line = styled.div`
  position: absolute;
  background: black;
  height: 3px;
  display: block;
  width: 100%;
  top: ${props => props.top};
  transition: top 300ms ease;

  ${HamburgerDiv}:hover & {
    top: ${props => props.topHover || null};
  }
`;

const HamburgerMenu = props => {
  return (
    <HamburgerDiv onClick={props.toggleDesktopNav}>
      <Line top='25%' topHover='30%'/>
      <Line top='45%' />
      <Line top='65%' topHover='60%'/>
    </HamburgerDiv>
  );
};

export default HamburgerMenu;