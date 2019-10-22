import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const EventShow = ({ data }) => {
  const { id, publication, title, type, date, body } = data.contentfulNewsItem;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{type}</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default EventShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulNewsItem(slug: { eq: $slug }) {
      id
      publication
      title
      type
      date
      body {
        content {
          content {
            nodeType
            value
          }
        }
      }
    }
  }
`;
