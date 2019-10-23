import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/components/layouts';
import Image from '~/components/image';
import SEO from '~/components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>ROW DTLA</h1>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: '0 auto 1.45rem',
          }}
        >
          <Image />
        </div>
      </div>
      <Link to="/collective/">Collective Entries</Link>
      <Link to="/events/">Events</Link>
      <Link to="/news">News Items</Link>
    </div>
  </Layout>
);

export default IndexPage;
