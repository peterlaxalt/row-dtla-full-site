import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Header from '../includes/Header';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({children, title}) => (
  <React.Fragment>
    <Head>
      <title>{title ? `${title} - Hudson Square Properties` : 'Hudson Square Properties'}</title>
    </Head>
    <Header />
    <div className='container'>
      {children}
    </div>
  </React.Fragment>
);

export default Layout;