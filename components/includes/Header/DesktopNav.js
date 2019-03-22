import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { mediaMax } from '~/styles/MediaQueries';
import Context from '~/config/Context';
import { DesktopHamburger } from './Hamburgers';
import { generateDesktopBuildingLinks } from './SubNav';

// Desktop Navigation

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

export const DesktopNavigation = props => {
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

// Desktop Buildings Navigation

const isBuildingNavVisible = (props) => {
  return props.route === 'buildings' ? true : props.active;
};

const BuildingNav = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  z-index: 100;
  transition: all 200ms ease;
  opacity: ${props => isBuildingNavVisible(props) ? 1 : 0 };
  visibility: ${props => isBuildingNavVisible(props) ? 'visible' : 'hidden' };

  ${mediaMax.desktopSmall`
    display: none;
  `}
  
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    margin: 0;
    height: 100%;
    li {
      list-style-type: none;
      cursor: pointer;
      a {
        text-decoration: none;
        color: initial;
      }
    }
  }
`;

export const BuildingNavigation = props => {
  return (
    <Context.Consumer>
      {context => (
        <BuildingNav 
          active={context.state.navigation.buildingNavActive}
          route={props.route} 
        >
          {generateDesktopBuildingLinks()}
        </BuildingNav>
      )}
    </Context.Consumer>
  );
};

