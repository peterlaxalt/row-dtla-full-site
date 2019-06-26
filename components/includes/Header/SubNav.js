import Link from 'next/link';
import styled from 'styled-components';

import { buildings } from '~/data/buildings';
import locations from '~/data/locations';
import Context from '~/config/Context';

// Desktop Subnavs
export const generateDesktopBuildingLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li className="mobile-nav-submenu" key={`building-${building.navTitle}`}>
      <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
        {/* eslint-disable-next-line */}
        <a>{building.navTitle}</a>
      </Link>
    </li>
  ));

  return <ul>{buildingLinks}</ul>;
};

// Mobile Subnavs

const SubNavUl = styled.ul`
  padding-top: ${props => (props.active ? '17px' : 0)};
  overflow: hidden;
  transition: all 300ms ease;
  max-height: ${props => (props.active ? props.maxHeight : 0)};
  li {
    list-style-type: none;
    padding: 10px 0;
    a {
      font-weight: 500;
      font-size: 0.8em;
    }
  }
`;

export const generateBuildingLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li className="mobile-nav-submenu" key={`building-${building.navTitle}`}>
      <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
        {/* eslint-disable-next-line */}
        <a>{building.navTitle}</a>
      </Link>
    </li>
  ));

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl active={context.state.navigation.activeSubNav === 'buildings'} maxHeight="490px">
          {buildingLinks}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};

export const generateLocationLinks = () => {
  const locationLinks = locations.map(location => (
    <li className="mobile-nav-submenu" key={`location-${location}`}>
      <Link href={`/neighborhood#section-neighborhood-${location}`}>
        {/* eslint-disable-next-line */}
        <a>{location}</a>
      </Link>
    </li>
  ));

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl active={context.state.navigation.activeSubNav === 'location'} maxHeight="174px">
          {locationLinks}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};

export const generateNewsLink = () => {
  let newsLink = (
    <li className="mobile-nav-submenu" key={`press-navlink`}>
      <Link href="/press">
        {/* eslint-disable-next-line */}
        <a>Hudson Square Press</a>
      </Link>
    </li>
  );

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl active={context.state.navigation.activeSubNav === 'news'} maxHeight="60px">
          {newsLink}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};
