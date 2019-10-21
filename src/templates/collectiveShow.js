import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const CollectiveShow = ({ data }) => {
  const { title } = data.contentfulCollectiveEntry;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <Link to="/blogposts">View more posts</Link>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default CollectiveShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulCollectiveEntry(slug: { eq: $slug }) {
      title
      type
      address
      closeTime
      subtitle
      website
      description {
        description
      }
      email
      facebook
      id
      instagram
      image {
        file {
          fileName
        }
      }
      parking
      openTime
    }
  }
`;
