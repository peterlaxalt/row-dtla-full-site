import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Context from '../config/Context';
import { mediaMin } from '../styles/MediaQueries';

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  display: block;
  background-image: url('${props => props.headerBackgroundPath}');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  width: 100%;
  height: 420px;
  ${mediaMin.tablet`
    background-position: center center;
    height: 400px;
  `}
  ${mediaMin.tabletLandscape`
    min-height: ${props => props.adjustedHeight}px;
  `}
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 300px 0;
  z-index: 1;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const HeaderLogo = styled.div`
  position: sticky;
  top: 300px;
  padding: 0;
  width: 100%;
  font-size: 64px;
  color: #fff;
  z-index: 10;
  img {
    max-height: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
  }
`;

const BackLink = styled.span`
  position: absolute;
  top: 64px;
  left: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  padding: 0 0 4px 0;
  letter-spacing: 1px;
  &:hover {
    border-bottom: 2px solid #fff;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const BuildingHeader = ({ headerInfo }) => {
  const context = useContext(Context);
  const { state } = context;
  const { windowDimensions } = state;
  const { width } = windowDimensions;
  const { headerBackground, headerLogo, headerLogoAlt, headerSize } = headerInfo;
  const adjustedHeight = (width * headerSize[1]) / headerSize[0];
  return (
    <HeaderContainer adjustedHeight={adjustedHeight} headerBackgroundPath={headerBackground}>
      <LogoContainer>
        <Link href="/buildings">
          <BackLink>Back to our Buildings</BackLink>
        </Link>
        <HeaderLogo>
          <img src={headerLogo} alt={headerLogoAlt} />
        </HeaderLogo>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default BuildingHeader;
