import React from 'react';
import styled from 'styled-components';

const HamburgerDiv = styled.div`
  background: green;
  width: 35px;
  position: relative;
  margin: 0 20px;
  cursor: pointer;
`;

const Line = styled.div`
  position: absolute;
  background: black;
  height: 3px;
  display: block;
  width: 100%;
  top: ${props => props.top};
  transition: top 100ms ease;

  ${HamburgerDiv}:hover & {
    top: 80%;
  }
`;

const HamburgerMenu = () => {
  return (
    <HamburgerDiv>
      <Line top='30%'/>
      <Line top='48%'/>
      <Line top='66%'/>
    </HamburgerDiv>
  );
};

export default HamburgerMenu;