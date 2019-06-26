import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '~/styles/MediaQueries';
import variables from '~/styles/Variables';
import Context from '~/config/Context';

const HamburgerDiv = styled.div`
  width: 25px;
  position: relative;
  margin: 0 15px 0 25px;
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
  transition: top 300ms ease, opacity 400ms ease, transform 200ms ease;
  &.desktop-top-line {
    opacity: ${props => (props.open ? 0 : 1)};
  }

  &.desktop-top-middle {
    ${props => props.open && 'transform: rotate(45deg)'};
  }

  &.desktop-bottom-middle {
    ${props => props.open && 'transform: rotate(-45deg)'};
  }

  &.desktop-bottom-line {
    opacity: ${props => (props.open ? 0 : 1)};
  }

  ${HamburgerDiv}:hover & {
    ${mediaMin.desktopSmall`
      top: ${props => props.topHover || null};
      &.desktop-top-middle {
        ${props => props.open && 'transform: rotate(0deg)'};
      }

      &.desktop-bottom-middle {
        ${props => props.open && 'transform: rotate(0deg)'};
      }
    `}
  }
`;

export const DesktopHamburger = props => (
  <Context.Consumer>
    {context => (
      <HamburgerDiv onClick={context.toggleDesktopNav}>
        <Line open={props.open} className="desktop-top-line" top="25%" topHover="30%" />
        <Line open={props.open} className="desktop-top-middle" top="45%" />
        <Line open={props.open} className="desktop-bottom-middle" top="45%" />
        <Line open={props.open} className="desktop-bottom-line" top="65%" topHover="60%" />
      </HamburgerDiv>
    )}
  </Context.Consumer>
);

export const MobileHamburger = () => (
  <Context.Consumer>
    {context => (
      <HamburgerDiv onClick={context.openMobileNav}>
        <Line top="30%" topHover="30%" />
        <Line top="45%" />
        <Line top="61%" topHover="60%" />
      </HamburgerDiv>
    )}
  </Context.Consumer>
);

const CloseDiv = styled.div`
  background: ${variables.colors.babyBlue};
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
  <Context.Consumer>
    {context => (
      <CloseDiv onClick={context.closeMobileNav}>
        <CloseLine top="45%" rotate="-45" />
        <CloseLine top="45%" rotate="45" />
      </CloseDiv>
    )}
  </Context.Consumer>
);
