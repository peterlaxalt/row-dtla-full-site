import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import BackArrow from '~/images/icons/arrow-back-white.svg';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import { mediaMin } from '~/styles/mediaQueries';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactContent = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  margin: 24px 0;
  ${mediaMin('tabletLandscape')} {
    margin: 64px 0 0 0;
    flex-direction: row;
  }
  h2 {
    margin: 0 0 32px 0;
    font-size: 40px;
    line-height: 44px;
    ${mediaMin('tabletLandscape')} {
      width: 35%;
      font-size: 72px;
      line-height: 80px;
    }
  }
`;

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactWrapper>
        <Link to="/">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <ContactContent>
          <h2>
            Get
            <br />
            Connected.
          </h2>
        </ContactContent>
      </ContactWrapper>
    </Layout>
  );
};

export default ContactPage;
