/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyles from '~/styles';

import ContextProvider from '~/provider/ContextProvider';
import Header from '~/components/includes/header';
import Footer from '~/components/includes/footer';
import CTA from '~/components/includes/cta';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ContextProvider>
      <GlobalStyles />
      <CTA />
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
