import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/components/layouts';
import Image from '~/components/image';
import SEO from '~/components/seo';

import styled from '@emotion/styled';
import { minWidth } from '~/styles/mediaQueries';

const TestDiv = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  ${minWidth('phone')} {
    font-size: 240px;
  },
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello There</h1>
      <p>Welcome my awesome blog</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: '0 auto 1.45rem',
          }}
        >
          <Image />
          <TestDiv>Hello There</TestDiv>
        </div>
      </div>
      <Link to="/blogposts/">View all posts</Link>
    </div>
  </Layout>
);

export default IndexPage;
