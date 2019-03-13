import React from 'react';
import App, { Container } from 'next/app';

import Layout from '../components/layouts/default';

import GlobalStyles from '../styles/Global';
import TypographyStyles from '../styles/Typography';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <GlobalStyles />
          <TypographyStyles />
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
