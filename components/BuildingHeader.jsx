import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  background-image: url('${props => props.headerBackgroundPath}');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-color: #fff;
  height: 1450px;
  width: 100%;
  @media screen and (max-width: 1024px){
      height: 420px;
  }
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

export default class BuildingHeader extends React.Component {
  render() {
    let { headerBackground, headerLogo, headerLogoAlt } = this.props.headerInfo;
    return (
      <HeaderContainer headerBackgroundPath={headerBackground}>
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
  }
}
