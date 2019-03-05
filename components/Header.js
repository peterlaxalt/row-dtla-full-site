import Link from 'next/link';
import styled from 'styled-components';
import routes from '../data/routes';

const StyledLink = styled.a`
  color: red;
  background: blue;
  margin-right: 20px;
  cursor: pointer;
`;

const generateLinks = () => {
  return routes.map((page) => (
    <Link key={`link-${page}`} href={`/${page}`}>
      <StyledLink>{page.charAt(0).toUpperCase() + page.slice(1)}</StyledLink>
    </Link>
  ));
};

const Header = () => {
  return (
    <div>
      <img src='/static/logo-hudson-1.png' alt='Hudson Square Properties Logo' />
      <div>
        {generateLinks()}
      </div>
    </div>
  );
};

export default Header;