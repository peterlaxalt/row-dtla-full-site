import Link from 'next/link';
import styled from 'styled-components';

import { MobileHamburger, MobileClose } from './Hamburgers';
import { generateBuildingNavLinks } from './navFunctions';
import { mediaMin } from '~/styles/MediaQueries';
import Context from '~/config/Context';

const MobileHamburgerContainer = styled.div`
  display: flex;
  height: 100%;

  ${mediaMin.desktopSmall`
    display: none;
  `}
`;

const MobileNav = styled.div`
  background: #fff;
  width: 300px;
  position: fixed;
  height: 100%;
  top: 0;
  right: ${props => props.active ? 0 : '-300px' };
  visibility: ${props => props.active ? 'visible' : 'hidden' };
  transition: all 400ms ease;

  ${mediaMin.desktopSmall`
    display: none;
  `}

  ul {
    padding-top: 20px;
    padding-right: 40px;
    li {
      list-style-type: none;
      padding: 17px 0;
      border-bottom: 2px solid rgba(200,200,200,.2);
    }
  }
`;

const MobileNavigation = props => {
  const listRoutes = props.routes.map(page => {
    return (
      <li key={`mobile-link-${page}`}>
        <Link href={`/${page}`}>
          <a>{page.charAt(0).toUpperCase() + page.slice(1)}</a>
        </Link>
      </li>
    );
  });
  
  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <MobileHamburgerContainer>
            <MobileHamburger toggleMobileNav={context.toggleMobileNav} />
          </MobileHamburgerContainer>
          <MobileNav active={context.state.navigation.mobileNavActive}>
            <MobileClose toggleMobileNav={context.toggleMobileNav} />
            <ul>
              {listRoutes}
              {generateBuildingNavLinks()}
            </ul>
          </MobileNav>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default MobileNavigation;