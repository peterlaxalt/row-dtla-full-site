import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import ContextProvider from '../provider/ContextProvider';

import Layout from '../components/layouts/default';

import GlobalStyles from '../styles/Global';
import TypographyStyles from '../styles/Typography';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;
    
    return (
      <Container>
        <ContextProvider>
          <GlobalStyles />
          <TypographyStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </Container>
    );
  }
}
