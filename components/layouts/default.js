import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { createGlobalStyle } from 'styled-components';

import Header from '../includes/header';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-size: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  #__next {
    height: 100%;
  }
`;

const Layout = ({children, title}) => (
  <React.Fragment>
    <Head>
      <title>{title ? `${title} - Hudson Square Properties` : 'Hudson Square Properties'}</title>
    </Head>
    <GlobalStyle />
    <Header />
    <div className='container'>
      {children}
    </div>
  </React.Fragment>
);

export default Layout;