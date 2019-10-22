import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from './logo';
import routes from '../../../data/routes';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavRow = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin-left: 2em;
      h3 {
        margin: 0;
      }
    }
  }
`;

const SocialMedia = styled.li``;

const generateNav = () => {
  const navigation = routes.map(route => {
    return (
      <li>
        <Link to={route.url}>
          <h3>{route.link}</h3>
        </Link>
      </li>
    );
  });
  navigation.push(
    <SocialMedia>
      <a href="https://www.instagram.com/">IG</a>
      <a href="https://www.facebook.com/">FB</a>
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
