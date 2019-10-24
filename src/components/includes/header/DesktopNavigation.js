import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import routes from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';
import FacebookLogo from '~/images/icons/fb-black.svg';
import InstagramLogo from '~/images/icons/insta-black.svg';

const NavRow = styled.nav`
  display: none;
  ${mediaMin('tabletLandscape')} {
    display: block;
  }
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin-left: 2em;
      a {
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
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
    &:first-child {
      margin-left: 0;
    }
  }
`;

const DesktopNavigation = () => {
  const generateNav = () => {
    const navigation = routes.map(route => {
      return (
        <li key={route.link}>
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
  return (
    <NavRow>
      <ul>{generateNav()}</ul>
    </NavRow>
  );
};

export default DesktopNavigation;
