import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { mediaMin } from '~/styles/MediaQueries';

import routes from '~/data/routes';
import locations from '~/data/locations';

import MobileNavigation from './MobileNav';
import { BuildingNavigation, NeighborhoodNavigation, BuildingEscapeOverlay, DesktopNavigation } from './DesktopNav';
import Context from '~/config/Context';

const isUpperNavActive = props => {
  return props.route !== 'home' ? true : props.active;
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
  transition: background 200ms ease;
  z-index: 999;

  ${mediaMin.desktopSmall`
    background: ${props => (isUpperNavActive(props) ? '#fff' : 'none')};
    height: 60px;
  `}
`;

const HeaderLogo = styled.img`
  display: block;
  max-width: 100%;
  margin-left: 15px;

  ${mediaMin.tabletLandscape`
    margin-left: 40px;
  `}
`;

import React from 'react';

const Header = ({ router }) => {
  const route = router.pathname.replace('/', '') || 'home';

  // Router.events.on('routeChangeStart', () => {
  //   context.state.navigation.mobileNavActive && context.closeMobileNav();
  // });

  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <HeaderWrapper active={context.state.navigation.desktopNavActive} route={route}>
            <Link key="link-home" href={`/`}>
              {/* eslint-disable-next-line */}
              <a>
                <HeaderLogo
                  src="/static/images/logos/hudson_square_properties_logo.png"
                  alt="Hudson Square Properties Logo"
                />
              </a>
            </Link>
            <DesktopNavigation locations={locations} routes={routes} route={route} />
            <MobileNavigation locations={locations} routes={routes} route={route} />
          </HeaderWrapper>
          <BuildingNavigation route={route} />
          <NeighborhoodNavigation route={route} />
          <BuildingEscapeOverlay />
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default withRouter(Header);
