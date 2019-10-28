import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Context from '~/config/Context';
import NavLink from '~/components/includes/header/NavLink';
import routes from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';
import FacebookLogoBlack from '~/images/icons/fb-black.svg';
import InstagramLogoBlack from '~/images/icons/insta-black.svg';
import FacebookLogoWhite from '~/images/icons/fb-white.svg';
import InstagramLogoWhite from '~/images/icons/insta-white.svg';

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
        color: ${props => (props.dark ? '#fff' : '#000')};
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
          color: ${props => (props.dark ? '#fff' : '#000')};
        }
      }
    }
  }
`;

const SocialMedia = styled.li`
  display: flex;
  a {
    margin-left: 2em;
  }
  a:first-of-type {
    margin-left: 0;
  }
`;

const DesktopNavigation = () => {
  const context = useContext(Context);
  const { darkTheme } = context;
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
          <img src={darkTheme ? InstagramLogoWhite : InstagramLogoBlack} alt="instagram logo" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={darkTheme ? FacebookLogoWhite : FacebookLogoBlack} alt="facebook logo" />
        </a>
      </SocialMedia>
    );
    return navigation;
  };
  return (
    <NavRow dark={darkTheme}>
      <ul>{generateNav()}</ul>
    </NavRow>
  );
};

export default DesktopNavigation;
