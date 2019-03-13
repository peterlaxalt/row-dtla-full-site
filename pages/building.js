import { withRouter } from 'next/router';
import buildings from '../data/buildings';

const Building = props => {
  const { building } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'red'}}>
      <h1>{building.title}</h1>
    </div>
  );
};

Building.getInitialProps = async function(context) {
  const { slug } = context.query;
  const building = buildings.find(building => building.slug === slug);

  return { building };
};

export default withRouter(Building);