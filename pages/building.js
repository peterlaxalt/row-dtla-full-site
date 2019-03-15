import { withRouter } from 'next/router';
import buildings from '../data/buildings';
import BuildingHeader from '../components/BuildingHeader';

const Building = props => {
  const { building } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: 'red'
      }}
    >
      <BuildingHeader headerInfo={building.header} />
      <div style={{ height: '200vh' }} />
    </div>
  );
};

Building.getInitialProps = async function(context) {
  const { slug } = context.query;
  const building = buildings.find(building => building.slug === slug);

  return { building };
};

export default withRouter(Building);
