import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { mediaMax } from '~/styles/MediaQueries';
import Context from '~/config/Context';
import { DesktopHamburger } from './Hamburgers';

const DesktopNav = styled.div`
  display: flex;
  height: 100%;

  ${mediaMax.desktopSmall`
    display: none;
  `}
`;

const isDesktopNavVisible = (props) => {
  return props.route !== 'home' ? true : props.active;
};

const NavUnorderedList = styled.ul`
  display: flex;
  align-items: center;
  transition: all 200ms ease;
  opacity: ${props => isDesktopNavVisible(props) ? 1 : 0 };
  visibility: ${props => isDesktopNavVisible(props) ? 'visible' : 'hidden' };
  
  li {
    color: inherit;
    cursor: pointer;
    margin: 0 15px;
    list-style-type: none;
    text-decoration: none;

    a {
      text-decoration: none;
    }
  }
`;

const DesktopNavigation = props => {
  const generateLinks = (context) => {
    const links = props.routes.map(page => {
      let link = page !== 'buildings' ? <a>{page.toUpperCase()}</a> : <a onMouseOver={context.toggleBuildingNav}>{page.toUpperCase()}</a>;
      return (
        <li id={`desktop-link-${page}`} key={`link-${page}`}>
          <Link href={`/${page}`}>
            {link}
          </Link>
        </li>
      );
    });

    return links;
  };
  

  return (
    <Context.Consumer>
      {context => (
        <DesktopNav>
          <NavUnorderedList route={props.route} active={context.state.navigation.desktopNavActive}>{generateLinks(context)}</NavUnorderedList>
          { props.route === 'home' && <DesktopHamburger toggleDesktopNav={context.toggleDesktopNav} /> }
        </DesktopNav>
      )}
    </Context.Consumer>
  );
};

export default DesktopNavigation;