import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '~/styles/MediaQueries';
import { colors } from '~/styles/Colors';

const HamburgerDiv = styled.div`
  width: 25px;
  position: relative;
  margin: 0 20px;
  cursor: pointer;

  ${mediaMin.desktopSmall`
    margin: 0 40px 0 20px;
    width: 30px;
  `}
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
    ${mediaMin.desktopSmall`
      top: ${props => props.topHover || null};
    `}
  }
`;

export const DesktopHamburger = props => {
  return (
    <HamburgerDiv onClick={props.toggleDesktopNav}>
      <Line top='25%' topHover='30%'/>
      <Line top='45%' />
      <Line top='65%' topHover='60%'/>
    </HamburgerDiv>
  );
};

export const MobileHamburger = props => {
  return (
    <HamburgerDiv onClick={props.toggleDesktopNav}>
      <Line top='30%' topHover='30%'/>
      <Line top='45%' />
      <Line top='61%' topHover='60%'/>
    </HamburgerDiv>
  );
};

const CloseDiv = styled.div`
  background: ${colors.babyBlue};
  height: 30px;
  width: 30px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const CloseLine = styled.div`
  position: absolute;
  height: 2px;
  width: 80%;
  top: ${props => props.top};
  transform: translateX(-50%) rotate(${props => props.rotate}deg);
  background: #fff;
  left: 50%;
`;

export const MobileClose = () => (
  <CloseDiv>
    <CloseLine top='45%' rotate='-45' />
    <CloseLine top='45%' rotate='45' />
  </CloseDiv>
);