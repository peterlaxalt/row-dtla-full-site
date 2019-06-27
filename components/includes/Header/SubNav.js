import Link from 'next/link';
import styled from 'styled-components';

import { buildings } from '~/data/buildings';
import locations from '~/data/locations';
import story from '~/data/story';
import Context from '~/config/Context';
import variables from '~/styles/Variables';

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
    li.active {
      color: ${variables.colors.babyBlue};
    }
  }
`;

export const generateBuildingLinks = (route, query) => {
  const buildingLinks = buildings.map(building => {
    return (
      <li
        className={`mobile-nav-submenu ${query.slug === building.slug ? 'active' : 'inactive'}`}
        key={`building-${building.navTitle}`}
      >
        <Link as={`/buildings/${building.slug}/`} href={`/building?slug=${building.slug}`}>
          {/* eslint-disable-next-line */}
          <a>{building.navTitle}</a>
        </Link>
      </li>
    );
  });

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
    <li className="mobile-nav-submenu" key={`location-${location.link}`}>
      <Link href={`/neighborhood#section-neighborhood-${location.path}`}>
        {/* eslint-disable-next-line */}
        <a>{location.link}</a>
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

export const generateDesktopLocationLinks = () => {
  const locationLinks = locations.map(location => (
    <li className="neighborhood-nav-submenu" key={`location-${location.link}`}>
      <Link href={`/neighborhood#section-neighborhood-${location.path}`}>
        {/* eslint-disable-next-line */}
        <a>{location.link.toUpperCase()}</a>
      </Link>
    </li>
  ));

  return <ul>{locationLinks}</ul>;
};

export const generateStoryLinks = () => {
  const storyLinks = story.map(story => (
    <li className="mobile-nav-submenu" key={`story-${story.link}`}>
      <Link href={`/story#section-story-${story.path}`}>
        {/* eslint-disable-next-line */}
        <a>{story.link}</a>
      </Link>
    </li>
  ));

  return (
    <Context.Consumer>
      {context => (
        <SubNavUl active={context.state.navigation.activeSubNav === 'story'} maxHeight="174px">
          {storyLinks}
        </SubNavUl>
      )}
    </Context.Consumer>
  );
};

export const generateDesktopStoryLinks = () => {
  const storyLinks = story.map(story => (
    <li className="story-nav-submenu" key={`story-${story.link}`}>
      <Link href={`/story#section-story-${story.path}`}>
        {/* eslint-disable-next-line */}
        <a>{story.link.toUpperCase()}</a>
      </Link>
    </li>
  ));

  return <ul>{storyLinks}</ul>;
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

export const generateDesktopNewsLink = () => {
  let newsLink = (
    <li className="mobile-nav-submenu" key={`press-navlink`}>
      <Link href="/press">
        {/* eslint-disable-next-line */}
        <a>Hudson Square Press</a>
      </Link>
    </li>
  );

  return <ul>{newsLink}</ul>;
};
