import Head from 'next/head';
import Header from '../includes/Header';
import { withRouter } from 'next/router';
import Context from '../../config/Context';

const Layout = (props) => {
  const title = props.router.pathname.replace('/', '') || 'Home';

  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <Head>
            <title>
              {title
                ? `${title} - Hudson Square Properties`
                : 'Hudson Square Properties'}
            </title>
          </Head>
          <Header />
          <div className="container">
            {props.children}
          </div>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default withRouter(Layout);
