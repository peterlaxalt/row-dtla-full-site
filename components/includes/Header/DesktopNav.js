import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { mediaMax } from '~/styles/MediaQueries';
import Context from '~/config/Context';
import { DesktopHamburger } from './Hamburgers';
import variables from '~/styles/Variables';
import {
  generateDesktopBuildingLinks,
  generateDesktopLocationLinks,
  generateDesktopNewsLink,
  generateDesktopStoryLinks
} from './SubNav';

// Desktop Navigation

const DesktopNavWrapper = styled.div`
  display: flex;
  height: 100%;

  ${mediaMax.desktopSmall`
    display: none;
  `}
`;

const isDesktopNavVisible = props => {
  return props.route !== 'home' ? true : props.active;
};

const NavUnorderedList = styled.ul`
  display: flex;
  align-items: center;
  transition: all 200ms ease;
  opacity: ${props => (isDesktopNavVisible(props) ? 1 : 0)};
  visibility: ${props => (isDesktopNavVisible(props) ? 'visible' : 'hidden')};
  li {
    color: inherit;
    cursor: pointer;
    padding: 0 15px;
    list-style-type: none;
    text-decoration: none;

    a {
      font-weight: 500;
      font-size: 12px;
      text-decoration: none;
      letter-spacing: 1px;
      cursor: pointer;
      color: #0a0a0a;
      font-stretch: normal;
      &:hover {
        color: ${variables.colors.babyBlue};
      }
    }
  }
  li.active a {
    color: ${variables.colors.babyBlue};
  }
`;

export const DesktopNavigation = props => {
  const generateLinks = context => {
    const links = props.routes.map(page => {
      const linkText = page.link;
      const linkPath = page.path;
      let link =
        linkText !== 'buildings' ? (
          // eslint-disable-next-line
          <a onMouseOver={() => context.state.navigation.buildingNavActive && context.toggleBuildingNav(false)}>
            {linkText.toUpperCase()}
          </a>
        ) : (
          // eslint-disable-next-line
          <a onMouseOver={() => context.toggleBuildingNav(true)} onFocus={context.toggleBuildingNav}>
            {linkText.toUpperCase()}
          </a>
        );

      return (
        <li
          id={`desktop-link-${linkText}`}
          key={`link-${linkText}`}
          className={
            props.route === linkPath || (props.route === 'building' && linkPath === 'buildings') ? 'active' : ''
          }
        >
          {linkText === 'login' ? (
            <a href={linkPath}>{linkText.toUpperCase()}</a>
          ) : (
            <Link href={`/${linkPath}`}>{link}</Link>
          )}
        </li>
      );
    });

    return links;
  };

  return (
    <Context.Consumer>
      {context => (
        <DesktopNavWrapper>
          <NavUnorderedList route={props.route} active={context.state.navigation.desktopNavActive}>
            {generateLinks(context)}
          </NavUnorderedList>
          {props.route === 'home' && (
            <DesktopHamburger
              open={context.state.navigation.desktopNavActive}
              toggleDesktopNav={context.toggleDesktopNav}
            />
          )}
        </DesktopNavWrapper>
      )}
    </Context.Consumer>
  );
};

// Desktop Buildings Navigation

const isBuildingNavVisible = props => {
  const visibleRoutes = ['building', 'buildings'];
  return visibleRoutes.includes(props.route) ? true : props.active;
};

const BuildingNavWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  z-index: 100;
  transition: all 200ms ease;
  opacity: ${props => (isBuildingNavVisible(props) ? 1 : 0)};
  visibility: ${props => (isBuildingNavVisible(props) ? 'visible' : 'hidden')};

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
        font-weight: 500;
        font-size: 0.8em;
        letter-spacing: 1px;
        color: ${variables.colors.babyBlue};
      }
    }
  }
`;

export const BuildingNavigation = props => {
  return (
    <Context.Consumer>
      {context => (
        <BuildingNavWrapper active={context.state.navigation.buildingNavActive} route={props.route}>
          {generateDesktopBuildingLinks()}
        </BuildingNavWrapper>
      )}
    </Context.Consumer>
  );
};

const BuildingOverlayWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: transparent;
  z-index: 99;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
`;

export const BuildingEscapeOverlay = () => {
  return (
    <Context.Consumer>
      {context => (
        <BuildingOverlayWrapper
          active={context.state.navigation.buildingNavActive}
          onMouseOver={() => context.toggleBuildingNav(false)}
          onFocus={context.toggleBuildingNav}
        />
      )}
    </Context.Consumer>
  );
};

const NeighborhoodNavWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  z-index: 50;
  transition: all 200ms ease;
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};

  ${mediaMax.desktopSmall`
    display: none;
  `}

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    margin: 0;
    height: 100%;
    li {
      padding: 0 30px;
      list-style-type: none;
      cursor: pointer;
      a {
        text-decoration: none;
        color: initial;
        font-weight: 500;
        font-size: 0.8em;
        letter-spacing: 1px;
        color: ${variables.colors.babyBlue};
      }
    }
  }
`;

export const NeighborhoodNavigation = props => {
  return (
    <NeighborhoodNavWrapper active={props.route === 'neighborhood'} route={props.route}>
      {generateDesktopLocationLinks()}
    </NeighborhoodNavWrapper>
  );
};

const NewsNavWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  z-index: 50;
  transition: all 200ms ease;
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};

  ${mediaMax.desktopSmall`
    display: none;
  `}

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    margin: 0;
    height: 100%;
    li {
      padding: 0 30px;
      list-style-type: none;
      cursor: pointer;
      a {
        text-decoration: none;
        color: initial;
        font-weight: 500;
        font-size: 0.8em;
        letter-spacing: 1px;
        color: ${variables.colors.babyBlue};
      }
    }
  }
`;

export const NewsNavigation = props => {
  return (
    <NewsNavWrapper active={props.route === 'news'} route={props.route}>
      {generateDesktopNewsLink()}
    </NewsNavWrapper>
  );
};

const StoryNavWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  z-index: 50;
  transition: all 200ms ease;
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};

  ${mediaMax.desktopSmall`
    display: none;
  `}

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    margin: 0;
    height: 100%;
    li {
      padding: 0 30px;
      list-style-type: none;
      cursor: pointer;
      a {
        text-decoration: none;
        color: initial;
        font-weight: 500;
        font-size: 0.8em;
        letter-spacing: 1px;
        color: ${variables.colors.babyBlue};
      }
    }
  }
`;

export const StoryNavigation = props => {
  return (
    <StoryNavWrapper active={props.route === 'story'} route={props.route}>
      {generateDesktopStoryLinks()}
    </StoryNavWrapper>
  );
};
