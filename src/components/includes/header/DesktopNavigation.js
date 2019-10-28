import React from 'react';
import styled from '@emotion/styled';

import NavLink from '~/components/includes/header/NavLink';
import routes from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';
import FacebookLogo from '~/images/icons/fb-black.svg';
import InstagramLogo from '~/images/icons/insta-black.svg';

const NavRow = styled.nav`
  display: none;
  ${mediaMin('tabletLandscape')} {
    display: block;
    height: 100%;
  }
  ul {
    list-style-type: none;
    display: flex;
    height: 100%;
    margin: 0;
    li {
      margin-left: 2em;
      height: 100%;
      a {
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
        height: 100%;
        display: flex;
        span {
          display: flex;
          align-items: center;
          height: 100%;
        }
        &:visited,
        &:hover {
          color: #000;
        }
      }
    }
  }
`;

const SocialMedia = styled.li`
  a {
    margin-left: 2em;
  }
  a:first-of-type {
    margin-left: 0;
  }
`;

const DesktopNavigation = () => {
  const generateNav = () => {
    const navigation = routes.map(route => {
      return (
        <li key={route.link}>
          <NavLink to={route.url}>
            <span>{route.link}</span>
          </NavLink>
        </li>
      );
    });

    navigation.push(
      <SocialMedia key="social-media">
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
  return (
    <NavRow>
      <ul>{generateNav()}</ul>
    </NavRow>
  );
};

export default DesktopNavigation;
