import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import routes from '../../../data/routes';
import buildings from '../../../data/buildings';

import HamburgerMenu from './HamburgerMenu';

const isUpperNavActive = (props) => {
  return props.route !== 'home' ? true : props.active;
};

const UpperNavigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: ${props => isUpperNavActive(props) ? '#fff' : 'transparent' };
  transition: background 200ms ease;
  z-index: 100;
`;

const DesktopNav = styled.div`
  display: flex;
  height: 100%;
`;

const isDesktopNavVisible = (props) => {
  return props.route !== 'home' ? true : props.active;
};

const NavUnorderedList = styled.ul`
  display: flex;
  align-items: center;
  transition: all 200ms ease;
  opacity: ${props => isDesktopNavVisible(props) ? 1 : 0 };
  visibility: ${props => isDesktopNavVisible(props) ? 'visible' : 'hidden' };
  li {
    color: inherit;
    cursor: pointer;
    margin: 0 15px;
    list-style-type: none;
    text-decoration: none;

    a {
      text-decoration: none;
    }
  }
`;

const HeaderLogo = styled.img`
  margin-left: 40px;
`;

const isBuildingNavVisible = (props) => {
  return props.route === 'buildings' ? true : props.active;
};

const BuildingNavigation = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 60px;
  height: 45px;
  width: 100%;
  z-index: 100;
  transition: all 200ms ease;
  opacity: ${props => isBuildingNavVisible(props) ? 1 : 0 };
  visibility: ${props => isBuildingNavVisible(props) ? 'visible' : 'hidden' };
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

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeNavActive: false,
      buildingNavActive: false
    };
  }

  generateUpperNavLinks(route) {
    const links = routes.map(page => {
      let link = page !== 'buildings' ? <a>{page.toUpperCase()}</a> : <a onMouseOver={() => this.setState({ buildingNavActive: true})} onMouseOut={() => this.setState({ buildingNavActive: false})}>{page.toUpperCase()}</a>;
      return (
        <li id={`desktop-link-${page}`} key={`link-${page}`}>
          <Link href={`/${page}`}>
            {link}
          </Link>
        </li>
      );
    });
    
    return (
      <DesktopNav>
        <NavUnorderedList route={route} active={this.state.homeNavActive}>{links}</NavUnorderedList>
        { route === 'home' && <HamburgerMenu toggleDesktopNav={() => this.setState({ homeNavActive: !this.state.homeNavActive })}  /> }
      </DesktopNav>
    );
  }

  generateBuildingNavLinks() {
    const buildingLinks = buildings.map(building => (
      <li key={`building-${building.title}`}>
        <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
          <a>{building.title.toUpperCase()}</a>
        </Link>
      </li>
    ));
  
    return <ul>{buildingLinks}</ul>;
  }

  render() {
    const route = this.props.router.pathname.replace('/', '') || 'home';
    return (
      <React.Fragment>
        <UpperNavigation active={this.state.homeNavActive} route={route}>
          <Link key='link-home' href={`/`}>
            <a>
              <HeaderLogo 
                src='/static/images/logos/hudson_square_properties_logo.png' 
                alt='Hudson Square Properties Logo' 
              />
            </a>
          </Link>
          {this.generateUpperNavLinks(route)}
        </UpperNavigation>
        <BuildingNavigation route={route} active={this.state.buildingNavActive}>
          {this.generateBuildingNavLinks()}
        </BuildingNavigation>
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
