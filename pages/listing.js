import Link from 'next/link';
import { withRouter } from 'next/router';
import { useContext } from 'react';
import styled from 'styled-components';
import Context from '~/config/Context';
import { buildings } from '../data/buildings';
// import { mediaMin } from '../styles/MediaQueries';
import FloorplanSection from '../components/pages/listing/FloorplanSection';
import NonResponsiveSlider from '../components/NonResponsiveSlider';

const ListingWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  font-family: 'Open Sans', Helvetica, Arial, Verdana, sans-serif;
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
    button {
      position: absolute;
      right: 0;
      width: 30px;
      height: 30px;
      cursor: pointer;
      background: none;
      border: none;
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
  .detail-wrapper {
    display: flex;
    width: 100%;
    .detail-column {
      width: 25%;
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

  const listingSliderArray = [listing.photo_1, listing.photo_2, listing.photo_3, listing.photo_4, listing.photo_5]
    .filter(obj => obj)
    .map(obj => {
      return {
        imgUrl: obj.url,
        imgAlt: obj.alt
      };
    });

  const { availability, axon, floor, suite, sqft, views } = listing;

  return (
    <ListingWrapper className="container">
      <div className="logo-wrapper">
        <img
          className="building-logo"
          src={building.header.headerLogoBlack}
          alt={`Logo for building ${building.navTitle}`}
        />
        <i className="fas fa-map-marker-alt" />
        <Link as={`/buildings/${building_slug}/`} href={`/building?slug=${building_slug}`}>
          <button aria-label={`Back to building page: ${building.navTitle}`} title="Go Back" />
        </Link>
      </div>
      <div className="detail-wrapper">
        <div className="detail-column">
          <h2>
            {suite} {floor}
          </h2>
          <p>Type: {listing.type}</p>
        </div>
        <div className="detail-column">
          <p>Availability:</p>
          <p> {availability}</p>
          <p>Sq. Ft:</p>
          <p> {sqft} SF</p>
        </div>
        <div className="detail-column">
          <p>Neighborhood:</p>
          <p> {availability}</p>
          <p>Views:</p>
          <p> {views}</p>
        </div>
        <div className="detail-column">
          <img src={axon} alt={`Axon for ${suite} in ${building.navTitle}`} />
        </div>
      </div>
      <FloorplanSection listing={listing} />
      <NonResponsiveSlider imgArray={listingSliderArray} />
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
