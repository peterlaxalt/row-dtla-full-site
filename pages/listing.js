import Link from 'next/link';
import { withRouter } from 'next/router';
import { useContext } from 'react';
import styled from 'styled-components';
import Context from '~/config/Context';
import { buildings } from '../data/buildings';
import { mediaMin } from '../styles/MediaQueries';

const ListingWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 0 15px;
  ${mediaMin.tabletLandscape`
    padding: 0 40px;
  `}
  .logo-wrapper {
    position: relative;
    display: flex;
    height: 70px;
    align-items: center;
    border-bottom: 3px solid black;
    img.building-logo {
      width: 105px;
      margin-right: 25px;
    }
    i {
      display: block;
      font-size: 1.5rem;
      height: 25px;
    }
    a {
      position: absolute;
      display: inline-block;
      right: 0;
      width: 30px;
      height: 30px;
      text-decoration: none;
      &:hover::before,
      &:hover::after {
        background: #369bf7;
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #000;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`;

const Listing = () => {
  const context = useContext(Context);
  const { availabilityData, pageProps } = context;
  const { building, building_slug, suite_floor_slug } = pageProps;

  const listing = availabilityData.find(obj => {
    return building_slug === obj.building_slug && suite_floor_slug === obj.suite_floor_slug;
  });

  return (
    <ListingWrapper>
      <div className="logo-wrapper">
        <img className="building-logo" src={building.header.headerLogoBlack} />
        <i className="fas fa-map-marker-alt" />
        <Link as={`/buildings/${building_slug}/`} href={`/building?slug=${building_slug}`}>
          <a />
        </Link>
      </div>
      <p>{listing.suite}</p>
    </ListingWrapper>
  );
};

Listing.getInitialProps = async function(ctx) {
  const { building_slug, suite_floor_slug } = ctx.query;
  const building = buildings.find(building => building.slug === building_slug);

  return {
    building,
    building_slug,
    suite_floor_slug
  };
};

export default withRouter(Listing);
