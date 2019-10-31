import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Context from '~/config/Context';

import { navRoutes } from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';

import FacebookLogoBlack from '~/assets/images/icons/fb-black.svg';
import InstagramLogoBlack from '~/assets/images/icons/insta-black.svg';
import FacebookLogoWhite from '~/assets/images/icons/fb-white.svg';
import InstagramLogoWhite from '~/assets/images/icons/insta-white.svg';

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
        transition: border-top 400ms ease, color 400ms ease;
        span {
          display: flex;
          align-items: center;
          height: 100%;
        }
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
  const { darkTheme } = useContext(Context);

  const generateNav = () => {
    const navigation = navRoutes.map(route => {
      return (
        <li key={route.link}>
          <Link
            to={route.url}
            getProps={({ isCurrent }) => {
              return {
                style: {
                  borderTop: isCurrent ? `4px solid ${darkTheme ? '#fff' : '#000'}` : '4px solid transparent',
                },
              };
            }}
          >
            <span>{route.link}</span>
          </Link>
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
