import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { mediaMin } from '~/styles/MediaQueries';

import routes from '~/data/routes';
import locations from '~/data/locations';

import { generateBuildingNavLinks } from './navFunctions';
import MobileNavigation from './MobileNav';
import DesktopNavigation from './DesktopNav';
import Context from '~/config/Context';

const isUpperNavActive = (props) => {
  return props.route !== 'home' ? true : props.active;
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
  transition: background 200ms ease;
  z-index: 100;

  ${mediaMin.desktopSmall`
    background: ${props => isUpperNavActive(props) ? '#fff' : 'transparent' };
    height: 60px;
  `}
`;

const HeaderLogo = styled.img`
  display: block;
  max-width: 100%;
  margin-left: 20px;

  ${mediaMin.phoneLarge`
    margin-left: 40px;
  `}
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
  render() {
    const route = this.props.router.pathname.replace('/', '') || 'home';
    
    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <HeaderWrapper active={context.state.navigation.desktopNavActive} route={route}>
              <Link key='link-home' href={`/`}>
                <a style={{ margin: 'auto 0'}}>
                  <HeaderLogo 
                    src='/static/images/logos/hudson_square_properties_logo.png' 
                    alt='Hudson Square Properties Logo' 
                  />
                </a>
              </Link>
              <DesktopNavigation 
                locations={locations}
                routes={routes}
                route={route}
              />
              <MobileNavigation 
                locations={locations}
                routes={routes}
              />
            </HeaderWrapper>
            <BuildingNavigation route={route} active={context.state.navigation.buildingNavActive}>
              {generateBuildingNavLinks()}
            </BuildingNavigation>
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(Header);
