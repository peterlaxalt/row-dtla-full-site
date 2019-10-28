/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/includes/header';
import Footer from '~/components/includes/footer';
import CTA from '~/components/includes/cta';

const Layout = ({ children }) => {
  return (
    <>
      <CTA />
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
