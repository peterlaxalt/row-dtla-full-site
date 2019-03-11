import Link from 'next/link';
import styled from 'styled-components';
import routes from '../../../data/routes';

// import { pxToRem } from '../helpers/math';

import HamburgerMenu from './HamburgerMenu';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: grey;
`;

const NavUnorderedList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavListItem = styled.li`
  color: inherit;
  cursor: pointer;
  margin: 0 15px;
  list-style-type: none;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderLogo = styled.img`
  margin-left: 40px;
`;

const generateLinks = () => {
  const links = routes.map((page) => (
    <Link key={`link-${page}`} href={`/${page}`} passHref>
      <NavListItem><a>{page.toUpperCase()}</a></NavListItem>
    </Link>
  ));
  
  return (
    <div style={{ display: 'flex', height: '100%', background: 'red'}}>
      <NavUnorderedList>
        {links}
      </NavUnorderedList>
      <HamburgerMenu />
    </div>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Link key='link-home' href={`/`}>
        <a><HeaderLogo src='/static/images/logos/hudson_square_properties_logo.png' alt='Hudson Square Properties Logo' /></a>
      </Link>
      {generateLinks()}
    </HeaderWrapper>
  );
};

export default Header;