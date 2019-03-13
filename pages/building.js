import { withRouter } from 'next/router';

const building = props => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <h1>{props.router.query.slug}</h1>
    </div>
  );
};

export default withRouter(building);