import Link from 'next/link';
import styled from 'styled-components';

import { MobileHamburger, MobileClose } from './Hamburgers';
import { generateBuildingLinks, generateLocationLinks, generateNewsLink } from './SubNav';
import { mediaMin } from '~/styles/MediaQueries';
import variables from '~/styles/Variables';
import Context from '~/config/Context';

const MobileHamburgerContainer = styled.div`
  display: flex;
  height: 100%;

  ${mediaMin.desktopSmall`
    display: none;
  `}
`;

const MobileOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 200ms ease;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  opacity: ${props => (props.active ? 1 : 0)};

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
  right: ${props => (props.active ? 0 : '-300px')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: all 400ms ease;
  z-index: 1;

  ${mediaMin.desktopSmall`
    display: none;
  `}

  ul.main-nav-ul {
    padding-top: 20px;
    padding-right: 40px;
    margin-top: 0;
    li.main-nav-li:nth-child(10) {
      border-bottom: none;
    }

    li.main-nav-li {
      list-style-type: none;
      padding: 17px 0;
      border-bottom: 2px solid rgba(200, 200, 200, 0.2);
      position: relative;
      font-family: ${variables.typography.default};
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
      i {
        position: absolute;
        right: 0;
        color: rgba(51, 51, 51, 0.27);
        cursor: pointer;
        transition: transform 200ms ease;
        transform: rotate(0);
        &.active {
          transform: rotate(45deg);
        }
      }
    }
    li.main-nav-li:nth-child(8) {
      border-bottom: none;
    }
  }
`;

const MobileNavigation = props => {
  const context = React.useContext(Context);

  const generateLinks = props.routes.map(page => {
    const linkText = page.link;
    const linkPath = page.path;
    let pageLink = (page, subNav = null) => (
      <li className="main-nav-li" key={`mobile-link-${linkText}`}>
        <Link href={`/${linkPath}`}>
          {/* eslint-disable-next-line */}
          <a>{linkText.charAt(0).toUpperCase() + linkText.slice(1)}</a>
        </Link>
        {/* eslint-disable */}
        {subNav && (
          <i
            className={`fas fa-plus ${context.state.navigation.activeSubNav === linkText ? 'active' : null}`}
            onClick={() => context.toggleSubNav(linkText)}
          />
        )}
        {/* eslint-disable */}
        {subNav}
      </li>
    );

    if (linkText === 'buildings') {
      return pageLink(linkText, generateBuildingLinks());
    } else if (linkText === 'location') {
      return pageLink(linkText, generateLocationLinks());
    } else if (page === 'news') {
      return pageLink(linkText, generateNewsLink());
    } else {
      return pageLink(linkText);
    }
  });

  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <MobileHamburgerContainer>
            <MobileHamburger />
          </MobileHamburgerContainer>
          <MobileNav active={context.state.navigation.mobileNavActive}>
            <MobileClose />
            <ul className="main-nav-ul">{generateLinks}</ul>
          </MobileNav>
          {context.state.windowDimensions.width < 1250 && (
            <MobileOverlay onClick={context.closeMobileNav} active={context.state.navigation.mobileNavActive} />
          )}
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default MobileNavigation;
