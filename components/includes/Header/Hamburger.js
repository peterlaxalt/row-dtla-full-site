import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '~/styles/MediaQueries';

const HamburgerDiv = styled.div`
  width: 30px;
  position: relative;
  margin: 0 20px;
  cursor: pointer;

  ${mediaMin.desktopSmall`
    margin: 0 40px 0 20px;
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
    top: ${props => props.topHover || null};
  }
`;

export const MobileHamburger = props => {
  return (
    <HamburgerDiv onClick={props.toggleDesktopNav}>
      <Line top='25%' topHover='30%'/>
      <Line top='45%' />
      <Line top='65%' topHover='60%'/>
    </HamburgerDiv>
  );
};

export const DesktopHamburger = props => {
  return (
    <HamburgerDiv onClick={props.toggleDesktopNav}>
      <Line top='25%' topHover='30%'/>
      <Line top='45%' />
      <Line top='65%' topHover='60%'/>
    </HamburgerDiv>
  );
};