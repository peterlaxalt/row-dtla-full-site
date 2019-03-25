import Link from 'next/link';
import styled from 'styled-components';

import { buildings } from '~/data/buildings';
import locations from '~/data/locations';
import Context from '~/config/Context';

// Desktop Subnavs
export const generateDesktopBuildingLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li className="mobile-nav-sublink" key={`building-${building.title}`}>
      <Link
        as={`/buildings/${building.slug}/`}
        href={`/building?slug=${building.slug}`}
      >
        <a>{building.title}</a>
      </Link>
    </li>
  ));

  return <ul>{buildingLinks}</ul>;
};

// Mobile Subnavs

const SubNavUl = styled.ul`
  overflow: hidden;
  transition: max-height 300ms ease;
  max-height: ${props => (props.active ? props.maxHeight : 0)};
  li {
    list-style-type: none;
    padding: 10px 0;
  }
`;

export const generateBuildingLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li className="mobile-nav-sublink" key={`building-${building.title}`}>
      <Link
        as={`/buildings/${building.slug}/`}
        href={`/building?slug=${building.slug}`}
      >
        <a>{building.title}</a>
      </Link>
    </li>
  ));

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl
          active={context.state.navigation.activeSubNav === 'buildings'}
          maxHeight="470px"
        >
          {buildingLinks}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};

export const generateLocationLinks = () => {
  const locationLinks = locations.map(location => (
    <li className="mobile-nav-sublink" key={`location-${location}`}>
      <Link href={`/neighborhood#section-neighborhood-${location}`}>
        <a>{location}</a>
      </Link>
    </li>
  ));

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl
          active={context.state.navigation.activeSubNav === 'location'}
          maxHeight="157px"
        >
          {locationLinks}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};

export const generateNewsLink = () => {
  let newsLink = (
    <li className="mobile-nav-sublink" key={`press-navlink`}>
      <Link href="/press">
        <a>Hudson Square Press</a>
      </Link>
    </li>
  );

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl
          active={context.state.navigation.activeSubNav === 'news'}
          maxHeight="40px"
        >
          {newsLink}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};
