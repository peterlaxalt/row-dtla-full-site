import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from './logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { mediaMin } from '~/styles/mediaQueries';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2.5%;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 84px;
  padding: 32px 14px;
  ${mediaMin('tabletLandscape')}{
    height: 100px;
    padding: 1em 4em;
  }
  a{
    z-index: 101;
    svg{
      height: 20px;
    }
  }
`;

const generateNav = () => {
  const navigation = routes.map(route => {
    return (
      <li key={route.url}>
        <Link to={route.url}>
          <span>{route.link}</span>
        </Link>
      </li>
    );
  });
  navigation.push(
    <SocialMedia>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src={InstagramLogo} alt="instagram logo" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={FacebookLogo} alt="facebook logo" />
      </a>
    </SocialMedia>
  );
  return navigation;
};

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo />
    </Link>
    <DesktopNavigation />
    <MobileNavigation />
  </HeaderContainer>
);

export default Header;
