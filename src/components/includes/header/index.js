import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import styled from '@emotion/styled';

import Context from '~/config/Context';
import Logo from './logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { mediaMin } from '~/styles/mediaQueries';

import routes from '~/data/routes';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 84px;
  padding: 32px 14px;
  background: ${props => (props.darkTheme ? '#000' : '#fff')};
  transition: background 400ms ease;

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
  const { setDarkTheme, darkTheme } = useContext(Context);

  return (
    <Location>
      {({ location }) => {
        const currentRoute = routes.find(route => route.url === location.pathname);
        const isDarkTheme = currentRoute ? currentRoute.darkTheme : false;
        setDarkTheme(isDarkTheme);

        return (
          <HeaderContainer darkTheme={darkTheme}>
            <Link to="/">
              <Logo />
            </Link>
            <DesktopNavigation />
            <MobileNavigation />
          </HeaderContainer>
        );
      }}
    </Location>
  );
};

export default Header;
