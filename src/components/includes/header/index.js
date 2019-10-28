import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Context from '~/config/Context';
import Logo from './logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { mediaMin } from '~/styles/mediaQueries';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  box-sizing: border-box;
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 84px;
  padding: 32px 14px;
  ${mediaMin('tabletLandscape')} {
    height: 100px;
    padding: 0 4em;
  }
  a {
    z-index: 101;
    svg {
      height: 20px;
    }
  }
`;

const Header = () => {
  const context = useContext(Context);
  const { darkTheme } = context;
  return (
    <HeaderContainer dark={darkTheme}>
      <Link to="/">
        <Logo />
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </HeaderContainer>
  );
};

export default Header;
