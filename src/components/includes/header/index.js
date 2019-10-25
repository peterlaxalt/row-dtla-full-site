import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from './logo';
import routes from '~/data/routes';
import FacebookLogo from '~/images/icons/fb-black.svg';
import InstagramLogo from '~/images/icons/insta-black.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2.5%;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 100;
`;

const NavRow = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin-left: 2em;
      a {
        text-decoration: none;
        color: #000;
        &:visited,
        &:hover {
          color: #000;
        }
        h3 {
          margin: 0;
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

const generateNav = () => {
  const navigation = routes.map(route => {
    return (
      <li key={route.url}>
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

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo />
    </Link>
    <NavRow>
      <ul>{generateNav()}</ul>
    </NavRow>
  </HeaderContainer>
);

export default Header;
