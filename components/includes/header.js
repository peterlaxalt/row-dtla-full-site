import Link from 'next/link';
import styled from 'styled-components';
import routes from '../../data/routes';

// import { pxToRem } from '../helpers/math';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const HeaderLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin: 0 15px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderLogo = styled.img`
  align-self: center;
  margin-left: 20px;
`;

const generateLinks = () => {
  const links = routes.map((page) => (
    <Link key={`link-${page}`} href={`/${page}`} passHref>
      <HeaderLink>{page.toUpperCase()}</HeaderLink>
    </Link>
  ));
  
  return (
    <ul>{links}</ul>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Link key='link-home' href={`/`}>
        <a><HeaderLogo src='/static/images/logos/hudson_square_properties_logo.png' alt='Hudson Square Properties Logo' /></a>
      </Link>
      <div>
        {generateLinks()}
      </div>
    </HeaderWrapper>
  );
};

export default Header;