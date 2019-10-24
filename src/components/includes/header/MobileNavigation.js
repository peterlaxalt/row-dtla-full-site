import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import routes from '~/data/routes';
import { mediaMin } from '~/styles/mediaQueries';
import FacebookLogo from '~/images/icons/fb-white.svg';
import InstagramLogo from '~/images/icons/insta-white.svg';
import Hamburger from './Hamburger';

const SocialMedia = styled.li`
  a {
    margin-left: 16px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  justify-content: center;
  align-items: center;
  padding: 84px 14px 34px 14px;
  opacity: ${props => (props.navActive ? '1' : '0')};
  visibility: ${props => (props.navActive ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  ${mediaMin('tabletLandscape')} {
    display: none;
  }
  span {
    color: #fff;
    opacity: 0.5;
    width: 100%;
  }
  ul {
    width: 100%;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    li {
      margin-bottom: 15%;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 34px;
        letter-spacing: -0.3px;
        line-height: 43px;
        &:visited {
          color: #fff;
        }
        h3 {
          margin: 0;
        }
      }
    }
  }
`;

const MobileNavigation = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleActive = () => {
    setNavActive(!navActive);
  };

  const generateNav = () => {
    const navigation = routes.map(route => {
      return (
        <li key={route.link}>
          <Link to={route.url}>
            <h3>{route.link}</h3>
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
    <>
      <Hamburger navActive={navActive} toggleActive={toggleActive} />
      <MobileMenu navActive={navActive}>
        <ul>{generateNav()}</ul>
        <span>© 2019 ROW DTLA</span>
      </MobileMenu>
    </>
  );
};

export default MobileNavigation;
