import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import routes from '../data/routes';

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: purple;
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled.a`
  color: #000;
  text-decoration: none;
  padding: 0 15px;
  font-family: 'berthold_akzidenz_groteskMd', Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.25s color ease-in-out;
  &:hover {
    color: #369bf7;
  }
`;

const HeaderLogo = styled.img`
  margin-left: 40px;
  align-self: center;
  cursor: pointer;
`;

const HeaderList = styled.div`
  right: 0;
  margin-right: 40px;
`;
const HeaderListInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Hamburger = styled.button`
  height: 40px;
  width: 40px;
  padding: 0 0 0 15px;
  margin: 0 0 0 0;
  box-sizing: content-box;
  &:focus {
    outline: none;
  }
`;

const HamburgerBox = styled.span`
  height: 100%;
  width: 100%;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerState: false,
      currentHover: null
    };
  }

  toggleHamburger = () => {
    this.state = {
      hamburgerState: !this.state.hamburgerState
    };
  };

  generateLinks = () => {
    const links = routes.map(page => (
      <Link key={`link-${page}`} href={`/${page}`} passHref>
        <HeaderLink>{page.charAt(0) + page.slice(1)}</HeaderLink>
      </Link>
    ));
    links.push(
      <Hamburger
        className={`hamburger hamburger--squeeze ${
          this.state.hamburgerState ? 'is-active' : ''
        }`}
        onClick={this.toggleHamburger}
        type="button"
      >
        <HamburgerBox className="hamburger-box">
          <span className="hamburger-inner" />
        </HamburgerBox>
      </Hamburger>
    );

    return <HeaderListInner>{links}</HeaderListInner>;
  };

  render() {
    return (
      <HeaderWrapper>
        <Link href="/" passHref>
          <HeaderLogo
            src="/static/logo-hudson-1.png"
            alt="Hudson Square Properties Logo"
          />
        </Link>
        <HeaderList>{this.generateLinks()}</HeaderList>
      </HeaderWrapper>
    );
  }
}

export default Header;
