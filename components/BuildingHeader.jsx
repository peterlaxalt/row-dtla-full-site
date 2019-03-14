import React from 'react';
import styled from 'styled-components';

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
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 300px 0;
  z-index: 1;
  text-align: center;
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
`;

export default class BuildingHeader extends React.Component {
  render() {
    let { headerBackground, headerLogo, headerLogoAlt } = this.props.headerInfo;
    return (
      <HeaderContainer headerBackgroundPath={headerBackground}>
        <LogoContainer>
          <HeaderLogo>
            <img src={headerLogo} alt={headerLogoAlt} />
          </HeaderLogo>
        </LogoContainer>
      </HeaderContainer>
    );
  }
}
