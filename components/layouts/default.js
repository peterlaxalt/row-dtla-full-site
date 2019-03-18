import Head from 'next/head';
import Header from '../includes/Header';
import { withRouter } from 'next/router';

const Layout = (props) => {
  const title = props.router.pathname.replace('/', '');

  return (
    <React.Fragment>
      <Head>
        <title>
          {title ? `${title} - Hudson Square Properties` : 'Hudson Square Properties'}
        </title>
      </Head>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
