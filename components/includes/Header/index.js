import Link from 'next/link';
import styled from 'styled-components';

import routes from '../../../data/routes';
import buildings from '../../../data/buildings';

import HamburgerMenu from './HamburgerMenu';

const PrimaryHeader = styled.div`
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
  li {
    color: inherit;
    cursor: pointer;
    margin: 0 15px;
    list-style-type: none;
    text-decoration: none;

    a {
      text-decoration: none;;
    }
  }
`;

const HeaderLogo = styled.img`
  margin-left: 40px;
`;

const generateTopHeaderLinks = () => {
  const links = routes.map(page => (
    <li key={`link-${page}`}>
      <Link href={`/${page}`}>
        <a>{page.toUpperCase()}</a>
      </Link>
    </li>
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

const SecondaryHeader = styled.div`
  background: green;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  transition: all 200ms ease;
  opacity: ${props => props.active ? 0 : 1};
  visibility: ${props => props.active ? 'initial' : 'none'};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    margin: 0;
    height: 100%;
    li {
      list-style-type: none;
      cursor: pointer;
      a {
        text-decoration: none;
        color: initial;
      }
    }
  }
`;

const generateBottomHeader = () => {
  const buildingLinks = buildings.map(building => (
    <li key={`building-${building.title}`}>
      <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
        <a>{building.title.toUpperCase()}</a>
      </Link>
    </li>
  ));

  return (
    <ul>{buildingLinks}</ul>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondaryActive: false
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <PrimaryHeader>
          <Link key='link-home' href={`/`}>
            <a>
              <HeaderLogo 
                src='/static/images/logos/hudson_square_properties_logo.png' 
                alt='Hudson Square Properties Logo' 
              />
            </a>
          </Link>
          {generateTopHeaderLinks()}
        </PrimaryHeader>
        <SecondaryHeader active={this.state.secondaryActive}>
          {generateBottomHeader()}
        </SecondaryHeader>
      </React.Fragment>
    );
  }
}

export default Header;