import { withRouter } from 'next/router';
import { useContext } from 'react';
import Context from '~/config/Context';

const Listing = () => {
  const context = useContext(Context);
  const { availabilityData, pageProps } = context;
  const { building_slug, suite_floor_slug } = pageProps;

  const listingData = availabilityData.find(obj => {
    return building_slug === obj.building_slug && suite_floor_slug === obj.suite_floor_slug;
  });

  return (
    <React.Fragment>
      <h1>{listingData.building_slug}</h1>
      <h2>{listingData.type}</h2>
      <h2>{listingData.suite_floor_slug}</h2>
    </React.Fragment>
  );
};

Listing.getInitialProps = async function(ctx) {
  const { building_slug, suite_floor_slug } = ctx.query;

  return {
    building_slug,
    suite_floor_slug
  };
};

export default withRouter(Listing);
