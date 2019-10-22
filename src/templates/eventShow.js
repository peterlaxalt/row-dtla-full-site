import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const EventShow = ({ data }) => {
  const { title } = data.contentfulEvent;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default EventShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      id
      address
      body {
        content {
          content {
            value
            nodeType
          }
        }
      }
      date
      endDate
      title
    }
  }
`;
