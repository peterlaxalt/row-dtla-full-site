import Link from 'next/link';
import styled from 'styled-components';

import buildings from '~/data/buildings';
import locations from '~/data/locations';

// Desktop Subnavs
export const generateDesktopBuildingLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li className='mobile-nav-sublink' key={`building-${building.title}`}>
      <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
        <a>{building.title}</a>
      </Link>
    </li>
  ));

  return <ul>{buildingLinks}</ul>;
};


// Mobile Subnavs

const SubNavUl = styled.ul`
  background: grey;
  overflow: hidden;
  transition: max-height 300ms ease;
  ${'' /* max-height: ${props => !props.active ? 0 : props.maxHeight + 'px' }; */}
  li {
    list-style-type: none;
    padding: 10px 0;
  }
`;

export const generateBuildingLinks = () => {
  const buildingLinks = buildings.map(building => (
    <li className='mobile-nav-sublink' key={`building-${building.title}`}>
      <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
        <a>{building.title}</a>
      </Link>
    </li>
  ));

  return <SubNavUl>{buildingLinks}</SubNavUl>;
};

export const generateLocationLinks = () => {
  const locationLinks = locations.map(location => (
    <li className='mobile-nav-sublink' key={`location-${location}`}>
      <Link href={`/neighborhood#section-neighborhood-${location}`}>
        <a>{location}</a>
      </Link>
    </li>
  ));

  return <SubNavUl>{locationLinks}</SubNavUl>;
};

export const generateNewsLink = () => {
  let newsLink = (
    <li className='mobile-nav-sublink' key={`press-navlink`}>
      <Link href='/press'>
        <a>Hudson Square Press</a>
      </Link>
    </li>
  );
  return <SubNavUl>{newsLink}</SubNavUl>;
};