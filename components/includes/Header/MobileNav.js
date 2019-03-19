import { MobileHamburger, MobileClose } from './Hamburger';
import styled from 'styled-components';
import { mediaMin } from '~/styles/MediaQueries';
import Context from '~/config/Context';

const MobileHamburgerContainer = styled.div`
  display: flex;
  height: 100%;

  ${mediaMin.desktopSmall`
    display: none;
  `}
`;

const MobileNav = styled.div`
  background: #fff;
  width: 300px;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  transition: right 300ms ease;
`;

const MobileNavigation = props => {
  const links = props.routes.map(page => <li key={`mobile-link-${page}`}>{page.toUpperCase()}</li>);
  
  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <MobileHamburgerContainer>
            <MobileHamburger toggleDesktopNav={context.toggleMobileNav} />
          </MobileHamburgerContainer>
          <MobileNav active={context.mobileNavActive}>
            <MobileClose />
            <ul>
              {links}
            </ul>
          </MobileNav>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default MobileNavigation;