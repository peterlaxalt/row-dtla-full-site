import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import ContextProvider from '~/provider/ContextProvider';
import fetch from 'isomorphic-unfetch';

import Layout from '~/components/layouts/default';

import GlobalStyles from '~/styles/inline/Global';
import TypographyStyles from '~/styles/inline/Typography';
import MapStyles from '~/styles/inline/Map';
import ContainerStyles from '~/styles/inline/Containers';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Get Availability Data
    let availabilityData = [];
    const availabilityRes = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_availability');
    const pages = availabilityRes.headers.get('x-wp-totalpages');
    for (let i = 1; i <= pages; i++) {
      availabilityData.push(
        await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_availability?page=' + i).then(availabilityData => {
          return availabilityData.json();
        })
      );
    }

    availabilityData = availabilityData.reduce((acc, curr) => acc.push(...curr) && acc, []);
    const fullAvailabilityData = availabilityData;

    availabilityData = availabilityData.map(el => {
      return el.acf;
    });

    // Get News Data
    let newsData = [];
    const newsRes = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_news');
    const newsPages = newsRes.headers.get('x-wp-totalpages');
    for (let i = 1; i <= newsPages; i++) {
      newsData.push(
        await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_news?page=' + i).then(newsData => {
          return newsData.json();
        })
      );
    }
    newsData = newsData.reduce((acc, curr) => acc.push(...curr) && acc, []);
    newsData = newsData.map(el => {
      return el.acf;
    });

    // Get Press Data
    let pressData = [];
    const pressRes = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_press');
    const pressPages = pressRes.headers.get('x-wp-totalpages');
    for (let i = 1; i <= pressPages; i++) {
      pressData.push(
        await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_press?page=' + i).then(pressData => {
          return pressData.json();
        })
      );
    }

    pressData = pressData.reduce((acc, curr) => acc.push(...curr) && acc, []);
    pressData = pressData.map(el => {
      return el.acf;
    });

    // Get Contact Data
    let contactData = [];
    const contactRes = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_contacts');
    const contactPages = contactRes.headers.get('x-wp-totalpages');
    for (let i = 1; i <= contactPages; i++) {
      contactData.push(
        await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_contacts?page=' + i).then(contactData => {
          return contactData.json();
        })
      );
    }

    contactData = contactData.reduce((acc, curr) => acc.push(...curr) && acc, []);
    contactData = contactData.map(el => {
      return el.acf;
    });

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { contactData, availabilityData, fullAvailabilityData, newsData, pressData, pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ContextProvider {...this.props}>
          <ContainerStyles />
          <GlobalStyles />
          <TypographyStyles />
          <MapStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </Container>
    );
  }
}
