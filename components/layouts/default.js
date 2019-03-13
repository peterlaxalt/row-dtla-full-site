import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Header from '../includes/Header';

import GlobalStyles from '../../styles/Global';

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
    <GlobalStyles />
    <Header />
    <div className='container'>
      <h1>{children}</h1>
    </div>
  </React.Fragment>
);

export default Layout;