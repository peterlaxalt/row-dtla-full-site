import Head from 'next/head';
import Header from '../includes/Header';
import { withRouter } from 'next/router';

import { capitalizeFirstLetter } from '~/helpers/strings';

const Layout = props => {
  const title = props.router.pathname.replace('/', '');

  return (
    <React.Fragment>
      <Head>
        <title>
          {title ? `${capitalizeFirstLetter(title)} - Hudson Square Properties` : 'Hudson Square Properties'}
        </title>
      </Head>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Layout);
